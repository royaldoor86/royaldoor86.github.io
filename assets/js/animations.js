.hero h1 {
  animation: glow 2s infinite alternate;
}

@keyframes glow {
  from { text-shadow: 0 0 10px #ffd700; }
  to { text-shadow: 0 0 35px #fff; }
}

.gold-btn {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 10px #ffd700; }
  50% { box-shadow: 0 0 25px #ffcc00; }
  100% { box-shadow: 0 0 10px #ffd700; }
}
