import{_ as s,c as n,o as e,ae as p}from"./chunks/framework.58IBamlh.js";const g=JSON.parse('{"title":"用户组","description":"","frontmatter":{},"headers":[],"relativePath":"Configure-User-Group.md","filePath":"Configure-User-Group.md"}'),r={name:"Configure-User-Group.md"};function t(l,a,i,o,c,d){return e(),n("div",null,a[0]||(a[0]=[p(`<h1 id="用户组" tabindex="-1">用户组 <a class="header-anchor" href="#用户组" aria-label="Permalink to &quot;用户组&quot;">​</a></h1><p>简儿 为不同级别的用户定义了用户组，并且自成一套用户组管理机制。认识用户组，了解您在不同的用户组中所拥有的权力与地位。</p><h2 id="manage-user" tabindex="-1">Manage＿User <a class="header-anchor" href="#manage-user" aria-label="Permalink to &quot;Manage＿User&quot;">​</a></h2><p>管理用户组。在原生 简儿 中，如果您是 Manage＿User 成员，在QQ群中发送 -帮助，可以看到以下消息：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>管理我们的简儿</span></span>
<span class="line"><span>————————————————————</span></span>
<span class="line"><span>你拥有管理简儿的权限。若要查看普通帮助，请@简儿</span></span>
<span class="line"><span>    1. -让我访问 —&gt; 检索用有权限的用户</span></span>
<span class="line"><span>    2. -注销 —&gt; 删除所有用户的上下文</span></span>
<span class="line"><span>    3. -修改 (hh:mm) (内容，必填) —&gt; 改变定时消息时间与内容</span></span>
<span class="line"><span>    4. -感知 —&gt; 查看运行状态</span></span>
<span class="line"><span>    5. -核验 (QQ号，必填) —&gt; 检索QQ账号信息</span></span>
<span class="line"><span>    6. -重启 —&gt; 关闭所有线程和进程，关闭简儿。然后重新启动简儿</span></span>
<span class="line"><span>    7. -禁言 (@QQ+空格+时间(以秒为单位)，必填) —&gt; 禁言用户一段时间</span></span>
<span class="line"><span>    8. -解禁 (@QQ，必填) —&gt; 解除该用户禁言</span></span>
<span class="line"><span>    9. -踢出 (@QQ，必填) —&gt; 将该用户踢出聊群</span></span>
<span class="line"><span>    10. 撤回 (引用一条消息) —&gt; 撤回该消息</span></span>
<span class="line"><span>    11. -添加黑名单 +空格 + 群号 —&gt; 将该群加入群发黑名单</span></span>
<span class="line"><span>    12. -删除黑名单 +空格 + 群号 —&gt; 将该群移除群发黑名单</span></span>
<span class="line"><span>    13. -列出黑名单 —&gt; 列出黑名单中的所有群</span></span>
<span class="line"><span>    你的每一步操作，与用户息息相关。</span></span></code></pre></div><p>通过消息可以看到，Manage＿User 可以在QQ群中监视简儿的部分设置和运行状态，修改部分配置（定时消息，清空上下文等）</p><p>Manage＿User 还可以通过简儿最大限度地管理群，包括但不限于 撤回、禁言、移出群聊等。</p><p>Manage＿User 可以使用 runcommand 功能执行命令，可以检索有权限的用户，但是无法编辑其他有权限用户的配置。</p><h2 id="super-user" tabindex="-1">Super＿User <a class="header-anchor" href="#super-user" aria-label="Permalink to &quot;Super＿User&quot;">​</a></h2><p>超级用户组。在 原生 简儿中，如果您是 Super＿User 成员，在QQ群中发送 -帮助，你会发现你与 Manage＿User 的不同之处：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    2. -管理 M (QQ号，必填) —&gt; 为用户添加 Manage_User 权限</span></span>
<span class="line"><span>    3. -管理 S (QQ号，必填) —&gt; 为用户添加 Super_User 权限</span></span>
<span class="line"><span>    4. -删除管理 (QQ号，必填) —&gt; 删除这个用户的全部权限</span></span></code></pre></div><p>Super＿User 除了拥有与 Manage＿User 完全相同的权力之外，还可以编辑其他有权限的用户，为其他人添加或删除 Manage＿User 或 Super＿User 权限，也可以 runcommand 执行命令。</p><h2 id="root-user" tabindex="-1">ROOT＿User <a class="header-anchor" href="#root-user" aria-label="Permalink to &quot;ROOT＿User&quot;">​</a></h2><p>根用户组，只有在配置机器人时设置为 主人 的QQ号将被设置为 ROOT＿User。此用户组拥有和 Super＿User 完全一样的权力，但是 ROOT＿User 被设计为只读，任何用户无论是否具有权限，都无法编辑 ROOT＿User ，相当于写死在了本地，保护QQ机器人 主人 身份的绝对地位。</p><h2 id="存储方式" tabindex="-1">存储方式 <a class="header-anchor" href="#存储方式" aria-label="Permalink to &quot;存储方式&quot;">​</a></h2><p>用户组的配置信息以 <code>.ini</code> 或 <code>.Sr</code> 类型的文件保存在本地，QQ机器人每次启动都会读取其中的内容，并且当有权限的用户通过QQ群更改用户组时，更改也会被立刻写入本地。因此请勿删除任何配置文件。</p>`,16)]))}const h=s(r,[["render",t]]);export{g as __pageData,h as default};
