import classes from './Skills.module.css';
import PageHeader from './../PageHeader/PageHeader';
import skill from './../../img/skills.svg';


const Skills = () => {

    return (
        <div className={classes.Skills}>
            <PageHeader title={'Skills'} />
            <div className={classes.Container}>
                <div className={classes.ContainerSkills}> 
                    <div className={ classes.ProgrammingSkills}>
                        <div className={classes.Text}>
                            <h1>Programming Skills</h1>
                            <h2>Web & Mobile</h2>
                            <p>JavaScript, TypeScript, HTML, CSS</p>
                            <p>Frameworks:Ionic with Angular, React, Bootstrap</p>
                            <h2>Databases</h2>
                            <p>MySQL</p>
                            <h2>OOP & Procedural Programming</h2>
                            <p> Java, C</p>
                        </div>
                    </div>
                    <div className={classes.PersonalSkills}>
                        <div className={classes.Text}>
                            <h1>Personal Skills</h1>
                            <p>Problem-solving, Motivated, Detail-Oriented, Research and analytical skills, Critical thinking</p>
                        </div>
                        </div>
                 </div>
                <div className={classes.Photo}>
                    <img className={classes.Skill} src={skill} alt='skill'></img>
                </div>
            </div>
        </div>
    );
}

export default Skills;