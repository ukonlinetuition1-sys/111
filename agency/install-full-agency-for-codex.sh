#!/usr/bin/env bash
set -euo pipefail

# Optional: install the audited Agency roster into Codex as a specialist library.
# This does NOT mean every agent should run on every task. See AI_ROUTING.md.

DEFAULT_AGENCY_REF="ad9264e309bd5e5422c04784372d7841b1e5d604"
AGENCY_REF="${AGENCY_REF:-$DEFAULT_AGENCY_REF}"

command -v git >/dev/null 2>&1 || { echo "Error: git is required." >&2; exit 1; }
if ! command -v codex >/dev/null 2>&1 && [ ! -d "${HOME}/.codex" ]; then
  echo "Error: Codex is not installed or ~/.codex does not exist." >&2
  exit 1
fi

TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT
REPO_DIR="$TMP_DIR/agency-agents"

echo "Fetching audited Agency revision: $AGENCY_REF"
git clone --no-checkout --filter=blob:none https://github.com/msitarzewski/agency-agents.git "$REPO_DIR"
cd "$REPO_DIR"
git checkout --detach "$AGENCY_REF"
ACTUAL_REF="$(git rev-parse HEAD)"
[ "$ACTUAL_REF" = "$AGENCY_REF" ] || { echo "Revision mismatch." >&2; exit 1; }

./scripts/convert.sh --tool codex
./scripts/install.sh --tool codex

echo "Agency specialist library installed from: $ACTUAL_REF"
echo "Use targeted agents only; project routing is defined in agency/AI_ROUTING.md."
