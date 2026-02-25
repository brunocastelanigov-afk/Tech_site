import './ContactFormPage.css'

function ContactFormPage() {
    return (
        <main className="contact-form-page">
            <span className="contact-form-page__line contact-form-page__line--left" />
            <span className="contact-form-page__line contact-form-page__line--right" />
            <section className="contact-form-page__panel">
                <img
                    className="contact-form-page__background-logo"
                    src="/imgs/QUEIROZTECH_ícone_branco_.svg"
                    alt=""
                    aria-hidden="true"
                />
                <header className="contact-form-page__header">
                    <h1 className="contact-form-page__title">QueirozTech</h1>
                    <p className="contact-form-page__subtitle">
                        Preencha os dados abaixo, entraremos em contato com você o mais rápido possíve!
                    </p>
                </header>
                <form className="contact-form">
                    <label className="contact-form__field">
                        <span className="contact-form__label">Nome completo</span>
                        <input
                            className="contact-form__input"
                            type="text"
                            name="fullName"
                            placeholder="Cliente  via Queiroz Tech"
                        />
                    </label>

                    <label className="contact-form__field">
                        <span className="contact-form__label">Email</span>
                        <input
                            className="contact-form__input"
                            type="email"
                            name="email"
                            placeholder="clientequeiroztech@empresa.com.br"
                        />
                    </label>

                    <label className="contact-form__field">
                        <span className="contact-form__label">Telefone</span>
                        <input
                            className="contact-form__input"
                            type="tel"
                            name="phone"
                            placeholder="(XX) XXXX-XXXX"
                        />
                    </label>

                    <div className="contact-form__row">
                        <label className="contact-form__field contact-form__field--state">
                            <span className="contact-form__label">Estado</span>
                            <input
                                className="contact-form__input"
                                type="text"
                                name="state"
                            />
                        </label>

                        <label className="contact-form__field contact-form__field--city">
                            <span className="contact-form__label">Cidade</span>
                            <input
                                className="contact-form__input"
                                type="text"
                                name="city"
                            />
                        </label>
                    </div>

                    <label className="contact-form__field">
                        <span className="contact-form__label">SKU produto</span>
                        <input
                            className="contact-form__input"
                            type="text"
                            name="sku"
                            placeholder="-"
                        />
                    </label>

                    <button className="contact-form__submit" type="submit">
                        Enviar informações
                    </button>
                </form>
            </section>
        </main>
    )
}

export default ContactFormPage
