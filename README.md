readwrite-gif
=============

Read and write GIFs in Javascript.

### Getting Started

Include readwrite-gif in your browser:

```html
<script src="/bower_components/readwrite-gif/dist/GIF.min.js"></script>
```

It exposes a single namespace `GIF` with two classes, `GIF.Decoder` and
`GIF.Encoder`.

### API

#### GIF.Decoder

Works just like `GifReader` in [omggif](https://github.com/deanm/omggif), since
that's what it actually is behind the scenes.

Example:

```js
var decoder = new GIF.Decoder(buffer),
  imagedata = ctx.createImageData(width, height);
decoder.decodeAndBlitFrameRGBA(0, imagedata.data); // Decode 0th frame
ctx.putImageData(imagedata, 0, 0);
```

#### GIF.Encoder

This part was taken from antimatter15's
[jsgif](https://github.com/antimatter15/jsgif) `GIFEncoder` implementation.

Example:

```js
var encoder = new GIF.Encoder();
encoder.setRepeat(0);   // loop forever
encoder.setDelay(100);  // go to next frame every 100 ms
encoder.start();        // write header
encoder.addFrame(ctx);  // Render the frame from the canvas context.
```
