#!/usr/bin/env python
# -*- encoding:utf-8 -*-

import os
import sys
import BaseHTTPServer
from SimpleHTTPServer import SimpleHTTPRequestHandler
HandlerClass = SimpleHTTPRequestHandler
ServerClass  = BaseHTTPServer.HTTPServer
Protocol     = "HTTP/1.0"
webdir = './public'

if sys.argv[1:]:
    port = int(sys.argv[1])
else:
    port = 8000
os.chdir(webdir)
server_address = ('', port)

HandlerClass.protocol_version = Protocol
HandlerClass.extensions_map.update({
    ".js": "application/javascript",
})
httpd = ServerClass(server_address, HandlerClass)

sa = httpd.socket.getsockname()
print "Serving HTTP on", sa[0], "port", sa[1], "..."
httpd.serve_forever()