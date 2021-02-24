import styles from '../styles/components/Profile.module.css';

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/DenilsonMelo.png" alt="Denilson Melo"/>
            <div>
                <strong>Denilson Melo</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    Level 99
                </p>
            </div>
        </div>
    );
}