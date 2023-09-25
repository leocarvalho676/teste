window.addEventListener('load', function() {
  var context = new (window.AudioContext || window.webkitAudioContext)();

  // Função para criar um oscilador
  function playTone(frequency, startTime, duration) {
    var oscillator = context.createOscillator();
    oscillator.type = 'square'; 
    oscillator.frequency.setValueAtTime(frequency, context.currentTime + startTime);
    oscillator.connect(context.destination);
    oscillator.start(context.currentTime + startTime);
    oscillator.stop(context.currentTime + startTime + duration);
  }

  // Notas da introdução de "Smoke on the Water" (versão simplificada)
  var G3 = 196.00;
  var Bb3 = 233.08;
  var Db4 = 277.18;
  var D4 = 293.66;
  var C4 = 261.63;

  var notes = [
    {frequency: G3, startTime: 0, duration: 0.5},
    {frequency: Bb3, startTime: 0.5, duration: 0.5},
    {frequency: Db4, startTime: 1, duration: 0.5},
    {frequency: G3, startTime: 1.5, duration: 0.5},
    {frequency: D4, startTime: 2, duration: 0.5},
    {frequency: Db4, startTime: 2.5, duration: 0.5},
    {frequency: C4, startTime: 3, duration: 0.5},
    {frequency: G3, startTime: 3.5, duration: 0.5},
    {frequency: Bb3, startTime: 4, duration: 0.5},
    {frequency: Db4, startTime: 4.5, duration: 0.5},
    {frequency: G3, startTime: 5, duration: 0.5},
    {frequency: D4, startTime: 5.5, duration: 0.5},
    {frequency: Db4, startTime: 6, duration: 0.5},
    {frequency: Bb3, startTime: 6.5, duration: 0.5}
  ];

  // Tocar as notas
  notes.forEach(function(note) {
    playTone(note.frequency, note.startTime, note.duration);
  });
});
