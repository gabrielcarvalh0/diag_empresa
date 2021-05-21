class PageController {
    constructor() {
        this._inputs = document.querySelectorAll('input[type="radio"]')
        this._labels = document.querySelectorAll('label')


        this.initialize();
    }



    initialize() {


        // this.input = addEventListener('change', e => {
        //     var cadaInput = e.target;

        //     if (cadaInput.checked) {
        //         if ((cadaInput.id == 'radio-1-1') || (cadaInput.id == 'radio-2-1') || (cadaInput.id == 'radio-3-1')) {
        //             this.mudaPanel();
        //         }
        //     }


        // })

    }
    mudaPanel() {
        const div = document.querySelector('#panel-res')
        const res = document.querySelector('#res');
        const desc = document.querySelector('#profile')

        div.classList.remove("bg-purple-300")
        div.classList.add("bg-blue-800")

        res.innerHTML = 'Madona'
        desc.innerHTML = 'Rebelde'
        desc.classList.remove('text-purple-500')

        desc.classList.add('text-white')
        res.classList.add('text-white')

    }
    get input() {
        return this._inputs.forEach(inp => {
            inp
        })
    }

    set input(value) {
        this._inputs.forEach(inp => {
            inp = value
        })
    }


    get label() {
        return this._labels.forEach(lab => {
            lab.innerText
        })
    }

    set label(value) {
        this._labels.forEach(lab => {
            lab.innerText = value
        })
    }


}





window.page = new PageController();
