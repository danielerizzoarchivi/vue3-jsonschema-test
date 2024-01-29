import { schema, uiSchema } from './schema.js';


const app = Vue.createApp({
    methods: {
        consoleLog(obj) {
            console.log(JSON.stringify(obj, null, 4));
        },
    },
    data() {
        return {
            formData: {

            },
            schema,
            uiSchema,
            formFooter: {
                show: true, // Indica se visualizzare il footer predefinito
                okBtn: 'Salva', // Conferma il testo del pulsante
                okBtnProps: { type: 'primary' }, // Passa gli oggetti di scena del pulsante di conferma, come la configurazione dello stato di caricamento del pulsante okBtnProps: { loading: true }
                cancelBtn: 'Annulla', //Testo del pulsante Annulla
                // Passa in modo trasparente i parametri al componente formItem in formFooter
                // Ad esempio, vue3-ant configura wrapperCol formItemAttrs = { wrapperCol: { span: 10, offset: 5 }}
                formItemAttrs: {}
            },
            formProps: {
                layoutColumn: 2, // 1 2 3, supporta il layout a 1 2 3 colonne, se utilizzi il modulo in linea, questa configurazione non è valida
                inline: false, // Modalità modulo inline, si consiglia di non configurare labelPosition con top quando è true.
                inlineFooter: false, // Se vuoi salvare i pulsanti e gli elementi del modulo da visualizzare su una riga, devi configurare true
                labelSuffix: ':', // suffisso etichetta
                labelPosition: 'left', // La posizione dell'etichetta del campo del modulo
                isMiniDes: false, // Se dare la priorità alla visualizzazione delle informazioni sulla descrizione in formato mini (il testo dell'etichetta e le informazioni sulla descrizione vengono visualizzati insieme)
               // defaultSelectFirstOption: true, // Il pulsante di opzione è obbligatorio, indipendentemente dal fatto che il primo sia selezionato per impostazione predefinita
                //popover: {}, // Passato in modo trasparente al componente popver della libreria dei componenti dell'interfaccia utente, come l'elemento ui Popover, antd a-popover
            
            }
        };
    },

});
app.use(ElementPlus);
app.component('vue3-form-element', window.vue3FormElement.default);
app.mount('#app'); 
