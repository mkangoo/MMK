import company from '../assets/img/company.jpg'

function Company() {
    return (
        <div className="container">
            <h2>История</h2>
            <div className="company-history">
                <img src={company} alt="" />
                <div className="company-info">
                    <div className="company-history__title">
                        ММК — удивительный феномен в отечественной истории, но зарождался он как великий эксперимент. Комбинат строила вся
                        страна.
                    </div>
                    <div className="company-history__description">
                        В этом огромном эксперименте было задействовано 46 проектных организаций, 108 учебных заведений, 49 железных дорог –
                        для перевозки грузов, оборудования и рабочих. 158 заводов отправляли на Магнитострой металлоконструкции, технику,
                        специалистов и целые бригады ударников. Производство росло, и продолжает расти бурными темпами. Все началось с
                        уникального скопления железных руд горы Магнитной…
                    </div>
                </div>
            </div>
            <div className="info">
                <div className="info__block"></div>
            </div>
            <div className="info__forwards">
                <h2>Награды</h2>
                <ul>
                    <li>-Орден Ленина (30 сентября 1943 года);</li>
                    <li>-Орден Трудового Красного Знамени (31 марта 1945 года)</li>
                    <li>
                        -Орден Ленина (12 февраля 1971 года) — за образцовое выполнение заданий по обеспечению народного хозяйства металлом
                        и достижение высоких технико-экономических показателей;
                    </li>
                    <li>-Орден Октябрьской Революции;</li>
                    <li>
                        -Почётный знак Российской Федерации «За успехи в труде» (20 января 2022 года) — за большой вклад в развитие
                        металлургической промышленности и высокие производственные показатели.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Company
