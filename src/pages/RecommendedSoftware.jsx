import ubuntuLogo from '../assets/img/ubuntu_logo.png'
import debianLogo from '../assets/img/debian_logo.png'
import centosLogo from '../assets/img/centos_logo.png'
import fedoraLogo from '../assets/img/fedora_logo.png'

function RecomendedSoftware() {
    return (
        <div className="container">
            <h2>Рекомендуемое программное обеспечение для Unix-подобных систем</h2>
            <div className="software-item">
                <a href="https://ubuntu.com/">
                    <img src={ubuntuLogo} width={50} height={100} alt="Ubuntu" />
                </a>
                <div className="software-info">
                    <h3>Ubuntu</h3>
                    <p>
                        Ubuntu - это один из самых популярных дистрибутивов Linux, который обеспечивает простоту использования и широкий
                        выбор программного обеспечения через свой пакетный менеджер. Он поддерживается активным сообществом разработчиков и
                        имеет многочисленные документации и руководства для новичков.
                    </p>
                </div>
            </div>
            <div className="software-item">
                <a href="https://www.debian.org/index.ru.html">
                    <img src={debianLogo} width={50} height={100} alt="Debian" />
                </a>
                <div className="software-info">
                    <h3>Debian</h3>
                    <p>
                        Debian - это стабильный и надежный дистрибутив Linux, который широко используется в серверной сфере благодаря своей
                        надежности и масштабируемости. Он предоставляет обширный набор программного обеспечения и поддерживается развитым
                        сообществом пользователей и разработчиков.
                    </p>
                </div>
            </div>
            <div className="software-item">
                <a href="https://www.centos.org/">
                    <img src={centosLogo} width={50} height={100} alt="CentOS" />
                </a>
                <div className="software-info">
                    <h3>CentOS</h3>
                    <p>
                        CentOS - это дистрибутив Linux, основанный на открытом исходном коде Red Hat Enterprise Linux, предназначенный для
                        корпоративного использования и обеспечивающий долгосрочную поддержку и стабильность. Он широко применяется в крупных
                        организациях и предприятиях благодаря своей надежности и безопасности.
                    </p>
                </div>
            </div>
            <div className="software-item">
                <a href="https://fedoraproject.org/ru/">
                    <img src={fedoraLogo} width={50} height={100} alt="Fedora" />
                </a>
                <div className="software-info">
                    <h3>Fedora</h3>
                    <p>
                        Fedora - это дистрибутив Linux, который предоставляет свежие и инновационные технологии для рабочих станций и
                        серверов. Он активно поддерживается сообществом разработчиков и обеспечивает высокую степень безопасности и
                        надежности.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RecomendedSoftware
