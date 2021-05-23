import classes from './Contact.module.css';
import PageHeader from './../PageHeader/PageHeader';


const Contact = () => {

    return (
        <div className={classes.Contact} id="contact">
            <PageHeader title={'Contact'} />
            <div className={classes.Container}>
                <div className={classes.Text}>
                    <h2>E-mail</h2>
                    <p>diana.maria.gornic@gmail.com</p>
                    <h2>Phone Number</h2>
                    <p>0729060059</p>
                    <h2>LinkedIn</h2>
                    <p>https://www.linkedin.com/in/diana-gornic-8a2386202/</p>
                    <h2>GitHub</h2>
                    <p>https://github.com/Diana-Gornic</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;