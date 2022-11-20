-- Resource Metadata
fx_version 'bodacious'
game 'gta5'

author 'John Doe <j.doe@example.com>'
description 'Example resource'
version '1.0.0'

fxdk_watch_command 'yarn' {'watch'}
fxdk_build_command 'yarn' {'build'}

-- What to run
client_script 'dist/client.index.js'
server_script 'dist/server.index.js'

