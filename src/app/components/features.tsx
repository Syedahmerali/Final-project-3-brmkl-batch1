import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Head from 'next/head';
import styles from '../components/style/Feature.module.css'

const FeaturePage = () => {
    return (
        <div className={styles.container}>
        
            <div className={styles.icons}>
                <a href="https://facebook.com" className={styles.icon} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://twitter.com" className={styles.icon} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://linkedin.com" className={styles.icon} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
            </div>
        </div>
    );
};

export default FeaturePage;
