
  if (window.GIF) {
    GIF = window.GIF;
  } else {
    GIF = {};
    window.GIF = GIF;
  }

  GIF.Encoder = GIFEncoder;
  GIF.Decoder = GifReader;

}();
