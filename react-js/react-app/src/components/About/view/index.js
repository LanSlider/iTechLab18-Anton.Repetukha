import React from 'react/index.js';
import Header from '../../Header/container/Header.js';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles.js';
import 'typeface-roboto';
import Paper from '@material-ui/core/Paper';

const About = (props) => {
    const { classes } = props;
    return (
        <React.Fragment>
            <Header selectedItem={2} />
            <div className={classes.Container}>
                <Paper position="static" color="default" className={classes.ContentContainer}>
                    <h2>О нас</h2>
                    <div className={classes.TextBlock}>
                        <p><b>iTechArt Group</b>&nbsp;– это команда <b>Remarkable People</b>, профессионалов в сфере разработки, тестирования, сервисной поддержки программных продуктов, модернизации и интеграции бизнес-приложений. <br/>Мы страстно любим дело, которым занимаемся, и стремимся к совершенству в решении любых задач.</p>
                        <p>Сегодня наша команда&nbsp;– <b>более 1000</b> высококлассных специалистов.<br/>Центры разработки находятся в Республике Беларусь, головной офис и отдел развития бизнеса&nbsp;– в Нью-Йорке и Атланте, США.</p><p><br/></p>
                    </div>      
                </Paper>
            </div>
        </React.Fragment>
    );  
}

export default withStyles(styles)(About);