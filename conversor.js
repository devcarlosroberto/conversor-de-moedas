const buttonConvert = document.querySelector('button')
const selectTo = document.querySelector('.convert-to')
const selectFrom = document.querySelector('.convert-from')

selectFrom.value = 'real'

async function clickButton() {

    //  Eventos
    const inputValue2 = document.querySelector('input').value
    const inputValue = (inputValue2.replace(',' , '.'))
    const valueConvert = document.querySelector('.value-convert')
    const valueConverted = document.querySelector('.value-converted')

    //  Cotações em Tempo Real

    const ratesUrl = 'BRL-USD,USD-BRL,AUD-BRL,CAD-BRL,EUR-BRL,CHF-BRL,CNY-BRL,JPY-BRL,GBP-BRL,ARS-BRL,BTC-BRL,ETH-BRL,LTC-BRL'
    const rates = `https://economia.awesomeapi.com.br/last/${ratesUrl}`
    const data = await fetch(rates).then(response => response.json())

    console.log(data)

    //  Moedas

    let total = 1
    const dolarUsValue = data.USDBRL['bid']
    const dolarAuValue = data.AUDBRL['bid']
    const dolarCaValue = data.CADBRL['bid']
    const euroValue = data.EURBRL['bid']
    const francoValue = data.CHFBRL['bid']
    const ieneValue = data.JPYBRL['bid']
    const libraValue = data.GBPBRL['bid']
    const pesoValue = data.ARSBRL['bid']
    const realValue = 1
    const renminbiValue = data.CNYBRL['bid']
    const bitcoinValue = data.BTCBRL['bid']
    const ethereumValue = data.ETHBRL['bid']
    const litecoinValue = data.LTCBRL['bid']

    //  Formatação de Valores

     if (selectFrom.value == 'dolar-us'){
        valueConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputValue)
        total = inputValue * dolarUsValue
    }

    if (selectFrom.value == 'dolar-au'){
        valueConvert.innerHTML = new Intl.NumberFormat('en-AU', {
            style: 'currency',
            currency: 'AUD'
        }).format(inputValue)
        total = inputValue * dolarAuValue
    }

    if (selectFrom.value == 'dolar-ca'){
        valueConvert.innerHTML = new Intl.NumberFormat('en-CA', {
            style: 'currency',
            currency: 'CAD'
        }).format(inputValue)
        total = inputValue * dolarCaValue
    }

    if (selectFrom.value == 'euro'){
        valueConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputValue)
        total = inputValue * euroValue
    }

    if (selectFrom.value == 'franco'){
        valueConvert.innerHTML = new Intl.NumberFormat('fr-CH', {
            style: 'currency',
            currency: 'CHF'
        }).format(inputValue)
        total = inputValue * francoValue
    }

    if (selectFrom.value == 'iene'){
        valueConvert.innerHTML = new Intl.NumberFormat('ja-JP', {
            style: 'currency',
            currency: 'JPY'
        }).format(inputValue)
        total = inputValue * ieneValue
    }

    if (selectFrom.value == 'libra'){
        valueConvert.innerHTML = new Intl.NumberFormat('en-UK', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputValue)
        total = inputValue * libraValue
    }

    if (selectFrom.value == 'peso'){
        valueConvert.innerHTML = new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS'
        }).format(inputValue)
        total = inputValue * pesoValue
    }

    if (selectFrom.value == 'real'){
        valueConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputValue)
        total = inputValue * realValue
    }

    if (selectFrom.value == 'renminbi'){
        valueConvert.innerHTML = new Intl.NumberFormat('zn-CH', {
            style: 'currency',
            currency: 'CNY'
        }).format(inputValue)
        total = inputValue * renminbiValue
    }

    if (selectFrom.value == 'bitcoin'){
        valueConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC'
        }).format(inputValue)
        total = inputValue * bitcoinValue
    }

    if (selectFrom.value == 'ethereum'){
        valueConvert.innerHTML = new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'ETH'
        }).format(inputValue)
        total = inputValue * ethereumValue
    }

    if (selectFrom.value == 'litecoin'){
        valueConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'LTC'
        }).format(inputValue)
        total = inputValue * litecoinValue
    }

    if (selectTo.value == 'dolar-us') {
        valueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(total / dolarUsValue)
    }
    
    if (selectTo.value == 'dolar-au') {
        valueConverted.innerHTML = new Intl.NumberFormat('en-AU', {
            style: 'currency',
            currency: 'AUD'
        }).format(total / dolarAuValue)
    }
    
    if (selectTo.value == 'dolar-ca') {
        valueConverted.innerHTML = new Intl.NumberFormat('en-CA', {
            style: 'currency',
            currency: 'CAD'
        }).format(total / dolarCaValue)
    }
    
    if (selectTo.value == 'euro') {
        valueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(total / euroValue)
    }
    
    if (selectTo.value == 'franco') {
        valueConverted.innerHTML = new Intl.NumberFormat('fr-CH', {
            style: 'currency',
            currency: 'CHF'
        }).format(total / francoValue)
    }
    
    if (selectTo.value == 'iene') {
        valueConverted.innerHTML = new Intl.NumberFormat('ja-JP', {
            style: 'currency',
            currency: 'JPY'
        }).format(total / ieneValue)
    }
    
    if (selectTo.value == 'libra') {
        valueConverted.innerHTML = new Intl.NumberFormat('en-UK', {
            style: 'currency',
            currency: 'GBP'
        }).format(total / libraValue)
    }
    
    if (selectTo.value == 'peso') {
        valueConverted.innerHTML = new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS'
        }).format(total / pesoValue)
    }
    
    if (selectTo.value == 'real') {
        valueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(total / realValue)
    }
    
    if (selectTo.value == 'renminbi') {
        valueConverted.innerHTML = new Intl.NumberFormat('zn-CH', {
            style: 'currency',
            currency: 'CNY'
        }).format(total / renminbiValue)
    }
    
    if (selectTo.value == 'bitcoin') {
        valueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'BTC'
        }).format(total / bitcoinValue)
    }
    
    if (selectTo.value == 'ethereum') {
        valueConverted.innerHTML = new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'ETH'
        }).format(total / ethereumValue)
    }
    
    if (selectTo.value == 'litecoin') {
        valueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'LTC'
        }).format(total / litecoinValue)
    }
}

    //  Atualizar Imagem e Texto

function changeConvertFrom(){

    const changeImgConvert = document.querySelector('.img-convert')
    const changeTextConvert = document.querySelector('.text-convert')

    if (selectFrom.value == 'dolar-us') {
        changeImgConvert.src ="."
        changeTextConvert.innerHTML = 'Dólar americano'
    }
    
    if (selectFrom.value == 'dolar-au') {
        changeImgConvert.src = 'assets/estados-unidos .png'
        changeTextConvert.innerHTML = 'Dólar australiano'
    }

    if (selectFrom.value == 'dolar-ca') {
        changeImgConvert.src = "assets/canada.png"
        changeTextConvert.innerHTML = 'Dólar canadense'
    }

    if (selectFrom.value == 'euro') {
        changeImgConvert.src = "assets/euro.png"
        changeTextConvert.innerHTML = 'Euro'
    }

    if (selectFrom.value == 'franco') {
        changeImgConvert.src = "assets/suiça.png"
        changeTextConvert.innerHTML = 'Franço Suíço'
    }

    if (selectFrom.value == 'iene') {
        changeImgConvert.src = "assets/japao.png"
        changeTextConvert.innerHTML = 'Iene'
    }

    if (selectFrom.value == 'libra') {
        changeImgConvert.src = "assets/libra.png"
        changeTextConvert.innerHTML = 'Libra esternlina'
    }

    if (selectFrom.value == 'peso') {
        changeImgConvert.src = "assets/argentina.png"
        changeTextConvert.innerHTML = 'Peso argentino'
    }

    if (selectFrom.value == 'real') {
        changeImgConvert.src = "assets/Real.png"
        changeTextConvert.innerHTML = 'Real'
    }

    if (selectFrom.value == 'renminbi') {
        changeImgConvert.src = "assets/china.png"
        changeTextConvert.innerHTML = 'Renminbi chinês'
    }

    if (selectFrom.value == 'bitcoin') {
        changeImgConvert.src = "assets/bitcoin.png"
        changeTextConvert.innerHTML = 'Bitcoin'
    }
    if (selectFrom.value == 'ethereum') {
        changeImgConvert.src = 'img/ethereum.png'
        changeTextConvert.innerHTML = 'Ethereum'}
    

    if (selectFrom.value == 'litecoin') {
        changeImgConvert.src = "assets/litecoin.png"
        changeTextConvert.innerHTML = 'Litecoin'
    }

    clickButton()
}

function changeConvertTo() {
    const changeImgConverted = document.querySelector('.img-converted')
    const changeTextConverted = document.querySelector('.text-converted')

    if (selectTo.value == 'dolar-us') {
        changeImgConverted.src = "assets/estados-unidos .png"
        changeTextConverted.innerHTML = 'Dólar americano'
    }
    
    if (selectTo.value == 'dolar-au') {
        changeImgConverted.src = "assets/australia.png"
        changeTextConverted.innerHTML = 'Dólar australiano'
    }

    if (selectTo.value == 'dolar-ca') {
        changeImgConverted.src = "assets/canada.png"
        changeTextConverted.innerHTML = 'Dólar canadense'
    }

    if (selectTo.value == 'euro') {
        changeImgConverted.src = "assets/euro.png"
        changeTextConverted.innerHTML = 'Euro'
    }

    if (selectTo.value == 'franco') {
        changeImgConverted.src = "assets/suiça.png"
        changeTextConverted.innerHTML = 'Franço Suíço'
    }

    if (selectTo.value == 'iene') {
        changeImgConverted.src = "assets/japao.png"
        changeTextConverted.innerHTML = 'Iene'
    }

    if (selectTo.value == 'libra') {
        changeImgConverted.src = "assets/libra.png"
        changeTextConverted.innerHTML = 'Libra esternlina'
    }

    if (selectTo.value == 'peso') {
        changeImgConverted.src = "assets/argentina.png"
        changeTextConverted.innerHTML = 'Peso argentino'
    }

    if (selectTo.value == 'real') {
        changeImgConverted.src = "assets/Real.png"
        changeTextConverted.innerHTML = 'Real'
    }

    if (selectTo.value == 'renminbi') {
        changeImgConverted.src = "assets/china.png"
        changeTextConverted.innerHTML = 'Renminbi chinês'
    }

    if (selectTo.value == 'bitcoin') {
        changeImgConverted.src = "assets/bitcoin.png"
        changeTextConverted.innerHTML = 'Bitcoin'
    }

if (selectFrom.value == 'ethereum') {
    changeImgConvert.src = "assets/ethereum.png"
    changeTextConvert.innerHTML = 'Ethereum'}

    if (selectTo.value == 'litecoin') {
        changeImgConverted.src = "assets/litecoin.png"
        changeTextConverted.innerHTML = 'Litecoin'
    }

    clickButton()
}

selectFrom.addEventListener('change', changeConvertFrom)
selectTo.addEventListener('change', changeConvertTo)
buttonConvert.addEventListener('click', clickButton)