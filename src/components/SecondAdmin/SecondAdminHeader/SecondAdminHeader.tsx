import { FC } from 'react';
import styles from '../SecondAdmin.module.css';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

const SecondAdminHeader: FC = () => (
    <header className={styles.header}>
        <Breadcrumbs />
    </header>
);

export default SecondAdminHeader;
