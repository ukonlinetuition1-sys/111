#!/usr/bin/env bash
set -euo pipefail

# Installs every current source agent from msitarzewski/agency-agents
# into the official Codex custom-agent location using the upstream
# conversion and installation scripts.

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

echo "Fetching the current Agency roster..."
git clone --depth 1 https://github.com/msitarzewski/agency-agents.git "$REPO_DIR"

cd "$REPO_DIR"

echo "Generating official Codex agent TOML files..."
./scripts/convert.sh --tool codex

echo "Installing all generated agents into ~/.codex/agents/..."
./scripts/install.sh --tool codex

echo "Installed current Agency roster for Codex."
echo "Example: Use the Frontend Developer agent to review this component."
