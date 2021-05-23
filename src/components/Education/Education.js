import classes from './Education.module.css';
import PageHeader from './../PageHeader/PageHeader';
import edu from './../../img/education.svg';
import edu2 from './../../img/education2.svg';



const Education = () => {

    return (
        <div className={classes.Education} id="education">
            <PageHeader title={'Education'} />
            <div className={classes.Container}>
                <div className={classes.Photo}>
                    <img className={classes.Edu} src={edu} alt='edu'></img>
                    <img className={classes.Edu} src={edu2} alt='edu2'></img>
                </div>
                <div className={classes.Text}>
                    <div className={ classes.Uni}> 
                        <h1>2018 - Present</h1>
                        <h2> Politehnica University of Timisoara</h2>
                        <p> Faculty of Computer Engineering and Automation</p>
                        <p> Computers and Information Technology</p>
                    </div>
                    <div className={classes.High}>
                        <h1>2014 - 2018</h1>
                        <h2> "Moise Nicoara" National College</h2>
                        <p> Highschool</p>
                    </div>
                    <div className={classes.Certificates}>
                        <h1> Certificates</h1>
                        <p> ECDL - 2016</p>
                        <p> Cambridge English Language Assessment, Advanced Exam - 2017</p>
                        <p> English Skills Certificate - 2018</p>
                        <p> EDigital Skills Certificate - 2018</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Education;