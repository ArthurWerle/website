import './style.scss';
import instagramImg from '../../assets/images/instagram.svg';
import linkedinImg from '../../assets/images/linkedin.svg';
import githubImg from '../../assets/images/github.svg';
import emailImg from '../../assets/images/email.svg';
import whatsappImg from '../../assets/images/whatsapp.svg';

export default function SocialButtons() {  
  return (
    <div className="social">
        <a target="_blank" rel="noreferrer" title="Instagram" href="https://www.instagram.com/werlearthur/">
            <img src={instagramImg} alt="Instagram"/>
        </a>
        <a target="_blank" rel="noreferrer" title="Linkedin" href="https://www.linkedin.com/in/arthur-werle-a8635a114/">
            <img src={linkedinImg} alt="Linkedin"/>
        </a>
        <a target="_blank" rel="noreferrer" title="Github" href="https://github.com/ArthurWerle">
            <img src={githubImg} alt="Github"/>
        </a>
        <a target="_blank" rel="noreferrer" title="Email" href="mailto:arthur.werle@gmail.com">
            <img src={emailImg} alt="Email"/>
        </a>
        <a target="_blank" rel="noreferrer" title="Whatsapp" href="https://wa.me/5551991873768?text=Hey there! I just got your number on your website.">
            <img src={whatsappImg} alt="Whatsapp"/>
        </a>
    </div>
  );
}