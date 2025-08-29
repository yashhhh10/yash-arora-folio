import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const games = [
  {
    name: 'Snake Game',
    description: 'Classic snake game built with React',
    color: 'from-green-500 to-emerald-600'
  },
  {
    name: 'Memory Puzzle',
    description: 'Test your memory with this card matching game',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    name: 'Typing Test',
    description: 'Challenge your typing speed and accuracy',
    color: 'from-purple-500 to-pink-600'
  }
];

const SnakeGame = () => {
  const [snake, setSnake] = useState([[10, 10]]);
  const [food, setFood] = useState([15, 15]);
  const [direction, setDirection] = useState([0, 1]);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [gameRunning, setGameRunning] = useState(false);

  const gridSize = 20;

  useEffect(() => {
    if (!gameRunning || gameOver) return;

    const moveSnake = () => {
      setSnake(prevSnake => {
        const newSnake = [...prevSnake];
        const head = [
          newSnake[0][0] + direction[0],
          newSnake[0][1] + direction[1]
        ];

        // Check boundaries
        if (head[0] < 0 || head[0] >= gridSize || head[1] < 0 || head[1] >= gridSize) {
          setGameOver(true);
          return prevSnake;
        }

        // Check self collision
        if (newSnake.some(segment => segment[0] === head[0] && segment[1] === head[1])) {
          setGameOver(true);
          return prevSnake;
        }

        newSnake.unshift(head);

        // Check food collision
        if (head[0] === food[0] && head[1] === food[1]) {
          setScore(prev => prev + 10);
          setFood([
            Math.floor(Math.random() * gridSize),
            Math.floor(Math.random() * gridSize)
          ]);
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    };

    const gameInterval = setInterval(moveSnake, 150);
    return () => clearInterval(gameInterval);
  }, [direction, food, gameRunning, gameOver]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameRunning) return;
      
      switch (e.key) {
        case 'ArrowUp':
          if (direction[0] !== 1) setDirection([-1, 0]);
          break;
        case 'ArrowDown':
          if (direction[0] !== -1) setDirection([1, 0]);
          break;
        case 'ArrowLeft':
          if (direction[1] !== 1) setDirection([0, -1]);
          break;
        case 'ArrowRight':
          if (direction[1] !== -1) setDirection([0, 1]);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction, gameRunning]);

  const startGame = () => {
    setSnake([[10, 10]]);
    setFood([15, 15]);
    setDirection([0, 1]);
    setGameOver(false);
    setScore(0);
    setGameRunning(true);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-4 items-center">
        <div className="text-sm font-mono">Score: {score}</div>
        <Button onClick={startGame} size="sm">
          {gameRunning ? 'Restart' : 'Start Game'}
        </Button>
      </div>
      
      <div 
        className="relative bg-surface border border-border rounded-lg"
        style={{ 
          width: gridSize * 15, 
          height: gridSize * 15,
          display: 'grid',
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize}, 1fr)`
        }}
      >
        {Array.from({ length: gridSize * gridSize }).map((_, index) => {
          const row = Math.floor(index / gridSize);
          const col = index % gridSize;
          const isSnake = snake.some(([r, c]) => r === row && c === col);
          const isFood = food[0] === row && food[1] === col;
          const isHead = snake[0] && snake[0][0] === row && snake[0][1] === col;

          return (
            <div
              key={index}
              className={`border border-border/20 ${
                isSnake
                  ? isHead
                    ? 'bg-primary'
                    : 'bg-primary/70'
                  : isFood
                  ? 'bg-accent animate-pulse'
                  : 'bg-transparent'
              }`}
            />
          );
        })}
      </div>

      {gameOver && (
        <div className="text-center">
          <p className="text-destructive font-semibold">Game Over!</p>
          <p className="text-foreground-secondary">Use arrow keys to play</p>
        </div>
      )}

      {!gameRunning && !gameOver && (
        <p className="text-foreground-secondary text-sm">Use arrow keys to control the snake</p>
      )}
    </div>
  );
};

const TypingTest = () => {
  const [text] = useState("The quick brown fox jumps over the lazy dog. This is a typing test to measure your speed and accuracy.");
  const [userInput, setUserInput] = useState('');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);

  useEffect(() => {
    if (userInput.length === 1 && startTime === null) {
      setStartTime(Date.now());
    }

    if (userInput.length > 0) {
      const timeElapsed = startTime ? (Date.now() - startTime) / 1000 / 60 : 0;
      const wordsTyped = userInput.length / 5;
      const currentWpm = timeElapsed > 0 ? Math.round(wordsTyped / timeElapsed) : 0;
      setWpm(currentWpm);

      let correctChars = 0;
      for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] === text[i]) correctChars++;
      }
      const currentAccuracy = userInput.length > 0 ? Math.round((correctChars / userInput.length) * 100) : 100;
      setAccuracy(currentAccuracy);
    }
  }, [userInput, startTime, text]);

  const resetTest = () => {
    setUserInput('');
    setStartTime(null);
    setWpm(0);
    setAccuracy(100);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-6 text-sm">
        <div>WPM: <span className="font-bold text-primary">{wpm}</span></div>
        <div>Accuracy: <span className="font-bold text-accent">{accuracy}%</span></div>
        <Button onClick={resetTest} size="sm" variant="outline">Reset</Button>
      </div>
      
      <div className="p-4 bg-surface rounded-lg border border-border">
        <div className="text-foreground-secondary mb-3 leading-relaxed">
          {text.split('').map((char, index) => (
            <span
              key={index}
              className={`${
                index < userInput.length
                  ? userInput[index] === char
                    ? 'text-green-500 bg-green-500/20'
                    : 'text-red-500 bg-red-500/20'
                  : index === userInput.length
                  ? 'bg-primary/30 animate-pulse'
                  : 'text-foreground-muted'
              }`}
            >
              {char}
            </span>
          ))}
        </div>
        
        <textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="w-full h-20 p-3 bg-input border border-input-border rounded resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
          placeholder="Start typing here..."
          disabled={userInput.length >= text.length}
        />
      </div>
      
      {userInput.length >= text.length && (
        <div className="text-center p-4 bg-gradient-primary rounded-lg text-primary-foreground">
          <h3 className="font-bold">Test Complete!</h3>
          <p>Final WPM: {wpm} | Accuracy: {accuracy}%</p>
        </div>
      )}
    </div>
  );
};

const InteractiveGames = () => {
  const [activeGame, setActiveGame] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h3 className="text-2xl font-bold mb-4">Interactive Playground</h3>
        <p className="text-foreground-secondary">Engage with these interactive demos</p>
      </motion.div>

      {!activeGame && (
        <div className="grid md:grid-cols-3 gap-6">
          {games.map((game, index) => (
            <motion.div
              key={game.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card 
                className={`p-6 cursor-pointer bg-gradient-to-br ${game.color} text-white border-0 hover:shadow-xl transition-all`}
                onClick={() => setActiveGame(game.name)}
              >
                <h4 className="font-bold text-lg mb-2">{game.name}</h4>
                <p className="text-white/90">{game.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      )}

      {activeGame && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              onClick={() => setActiveGame(null)}
              className="gap-2"
            >
              ← Back to Games
            </Button>
            <h3 className="text-xl font-bold">{activeGame}</h3>
          </div>

          <Card className="p-6 bg-card border-card-border">
            {activeGame === 'Snake Game' && <SnakeGame />}
            {activeGame === 'Typing Test' && <TypingTest />}
            {activeGame === 'Memory Puzzle' && (
              <div className="text-center text-foreground-secondary">
                Memory puzzle game coming soon!
              </div>
            )}
          </Card>
        </motion.div>
      )}
    </div>
  );
};

export default InteractiveGames;