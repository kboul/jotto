import axios from 'axios';

export const getSecretWord = async setSecretWord => {
    const { data } = await axios.get('/api/word');
    setSecretWord(data);
};
