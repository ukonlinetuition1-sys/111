#!/usr/bin/env bash
set -euo pipefail

# Installs every source agent from the audited Agency revision into
# the official Codex custom-agent location using the upstream
# conversion and installation scripts.
#
# Security: the default is pinned to the exact signed upstream commit
# audited for this project. Set AGENCY_REF explicitly if you intentionally
# want to review and install a different revision.

DEFAULT_AGENCY_REF="ad9264e309bd5e5422c04784372d7841b1e5d604"
AGENCY_REF="${AGENCY_REF:-$DEFAULT_AGENCY_REF}"

if ! command -v git >/dev/null 2>&1; then
  echo "Error: git is required." >&2
  exit 1
fi

if ! command -v codex >/dev/null 2>&1 && [ ! -d "${HOME}/.codex" ]; then
  echo "Error: Codex is not installed or ~/.codex does not exist." >&2
  echo "Install Codex first, then run this script again." >&2
  exit 1
fi

TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT

REPO_DIR="$TMP_DIR/agency-agents"

echo "Fetching Agency revision: $AGENCY_REF"
git clone --no-checkout https://github.com/msitarzewski/agency-agents.git "$REPO_DIR"
cd "$REPO_DIR"
git checkout --detach "$AGENCY_REF"

ACTUAL_REF="$(git rev-parse HEAD)"
if [ "$ACTUAL_REF" != "$AGENCY_REF" ]; then
  echo "Error: checked-out revision does not match requested revision." >&2
  exit 1
fi

echo "Generating official Codex agent TOML files..."
./scripts/convert.sh --tool codex

echo "Installing all generated agents into ~/.codex/agents/..."
./scripts/install.sh --tool codex

echo "Installed Agency agents from audited revision: $ACTUAL_REF"
echo "Example: Use the Frontend Developer agent to review this component."
