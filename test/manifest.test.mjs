import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
test('stable Windows manifest contains exact URL hash and executable alias',()=>{
 const m=JSON.parse(readFileSync(new URL('../bucket/whitemagic.json',import.meta.url)));
 assert.equal(m.version,'9.3.4');assert.equal(m.architecture['64bit'].url,'https://github.com/lbailey94/whitemagic/releases/download/v9.3.4/wm-windows-x86_64.exe');
 assert.match(m.architecture['64bit'].hash,/^[0-9a-f]{64}$/);assert.deepEqual(m.bin,[['wm-windows-x86_64.exe','wm']]);
});
