# WhiteMagic Scoop bucket

```powershell
scoop bucket add whitemagic https://github.com/lbailey94/scoop-whitemagic
scoop install whitemagic
wm --version
```

Expect `wm 9.3.4`. This bucket selects the **stable Gen 2 Windows x64** release.
To connect a client, use the full path to this binary and `serve --profile curated`.
Find the installed executable with `Get-Command wm`. See the
[Gen 2 client instructions](https://www.whitemagic.dev/install#clients) for the
argument order with an explicit store path.

The Windows CI run installed the package on a GitHub-hosted Windows Server 2022 runner,
checked the release and executable digests, exercised MCP initialize and tools/list
in a scratch store, and uninstalled it. The run covers the package and server
handshake. [Windows install run](https://github.com/lbailey94/scoop-whitemagic/actions/runs/41855165947)

[Windows setup](https://www.whitemagic.dev/install#fallback) ·
[Stable release](https://github.com/lbailey94/whitemagic/releases/tag/v9.3.4) ·
[Source](https://github.com/lbailey94/whitemagic)
