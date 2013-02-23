parse-ply
=========
A streaming [PLY](http://www.cc.gatech.edu/projects/large_models/ply.html) parser written in JavaScript.

Usages
======
First, install using npm:

    npm install parse-ply

Then you can create a stream using require.  For example, here is some code that parses a PLY file from stdin and dumps the result to stdout:

    process.stdin.pipe(require("parse-ply")()).on("data", function(ply) {
      console.log(ply);
    });

The properties within the file are all encoded as appropriate typed arrays.

`require("parse-ply")()`
------------------------
This creates a streaming PLY parser.  To use it, pipe in a stream containing your mesh.  When it is done, it will emit a `data` event that has the parsed PLY file as the main argument.

More Information
================
To learn more about the PLY file format, here are some links:

* [Wikipedia](http://en.wikipedia.org/wiki/PLY_\(file_format\))
* [Paul Bourke's C code](http://paulbourke.net/dataformats/ply/)

You can also view PLY files using standard tools, like MeshLab:

* [MeshLab](http://en.wikipedia.org/wiki/MeshLab)

Credits
=======
(c) 2013 Mikola Lysenko. BSD License