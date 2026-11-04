# WhiteMagic Scoop bucket

```powershell
scoop bucket add whitemagic https://github.com/lbailey94/scoop-whitemagic
scoop install whitemagic
```

Selects the **stable Gen2 9.3.4 Windows x64** binary with an exact checksum.
Windows is published but not yet install-qualified in this review. The new workflow
candidate checks release metadata, then installs on a disposable Windows runner,
records the executable hash, exercises MCP initialize/tools/list with a scratch
store, and uninstalls. Local manifest validation does not stand in for that run.
The workflow does not certify a complete authenticated client or restart journey.

[Setup](https://www.whitemagic.dev/install) ·
[Stable release](https://github.com/lbailey94/whitemagic/releases/tag/v9.3.4) ·
[Source](https://github.com/lbailey94/whitemagic)
