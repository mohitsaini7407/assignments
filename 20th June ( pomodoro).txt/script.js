
    let timer;
    let timeLeft = 25 * 60;
    let isRunning = false;
    let currentCycle = 0;
    let mode = 'work'; 

    function updateTimerDisplay() {
      const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
      const seconds = (timeLeft % 60).toString().padStart(2, '0');
      document.getElementById('timer').textContent = `${minutes}:${seconds}`;
    }

    function updateSessionType() {
      let label = '';
      if (mode === 'work') label = 'Work Session';
      else if (mode === 'short') label = 'Short Break';
      else if (mode === 'long') label = 'Long Break';
      document.getElementById('session-type').textContent = label;
    }

    function updateCycleDisplay() {
      const totalCycles = parseInt(document.getElementById('cycles').value);
      let display = '';
      for (let i = 0; i < totalCycles; i++) {
        display += i < currentCycle ? '🔴 ' : '⚪ ';
      }
      document.getElementById('cycle-display').textContent = display.trim();
    }

    function setDurations() {
      const work = parseInt(document.getElementById('work-duration').value) || 25;
      const short = parseInt(document.getElementById('short-break').value) || 5;
      const long = parseInt(document.getElementById('long-break').value) || 15;
      return { work, short, long };
    }

    function startTimer() {
      if (isRunning) return;
      isRunning = true;
      timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
          clearInterval(timer);
          isRunning = false;
          handleSessionEnd();
        }
      }, 1000);
    }

    function pauseTimer() {
      clearInterval(timer);
      isRunning = false;
    }

    function resetTimer() {
      pauseTimer();
      currentCycle = 0;
      mode = 'work';
      const { work } = setDurations();
      timeLeft = work * 60;
      updateTimerDisplay();
      updateSessionType();
      updateCycleDisplay();
    }

    function handleSessionEnd() {
      const { work, short, long } = setDurations();
      if (mode === 'work') {
        currentCycle++;
        if (currentCycle >= parseInt(document.getElementById('cycles').value)) {
          mode = 'long';
          currentCycle = 0;
          timeLeft = long * 60;
        } else {
          mode = 'short';
          timeLeft = short * 60;
        }
      } else {
        mode = 'work';
        timeLeft = work * 60;
      }
      updateSessionType();
      updateCycleDisplay();
      updateTimerDisplay();
      startTimer();
    }

    resetTimer();