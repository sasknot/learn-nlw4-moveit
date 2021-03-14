import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile () {
  const { username } = useContext(UserContext);
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src={`https://github.com/${username}.png`} alt="Rafael" />
      <div>
        <strong>Rafael Silva</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
