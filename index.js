'use strict';

var Encoder = require('./src/GIFEncoder.js'),
  Decoder = require('./src/GifReader.js');

module.exports = {
  Encoder: Encoder,
  Decoder: Decoder
};
