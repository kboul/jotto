import React from 'react';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';

const App = () => {
    return (
        <div className="container">
            <div className="text-center">
                <h1 className="my-4">Jotto</h1>
                <Congrats success={true} />
                <GuessedWords
                    guessedWords={[
                        { guessedWord: 'train', letterMatchCount: 3 }
                    ]}
                />
            </div>
        </div>
    );
};

export default App;
