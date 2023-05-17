import { StyleSheet } from "react-native";

//Fonte do app.

//Cores do app.
var corFundo = "#EAFDFF";
var corCabecalho = "#0AC4DD";
var corInput = "#9AE1F1";
var corBotao = "#0AC4DD";
var corMenu = "#9AE1F1";
var corPesquisar = "rgba(10, 196, 221, 0.7)"

const styles = StyleSheet.create({
    //Estilização do cabecalho.
    container: {
        flex: 1,
        backgroundColor: corFundo,
    },
    cabecalho: {
        height: 40,
        // marginTop: 25,
        maxHeight: 45,
        backgroundColor: corCabecalho,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        shadowColor: '#000',
        elevation: 20,
    },
    textoCabecalho: {
        fontSize: 22,
        fontWeight: "bold",
        fontStyle: "italic",
        color: '#222'
    },
    //Estilização da tela cadastro.
    dadosUsuario: {
        marginTop: 70,
    },
    textoInputCadastro: {
        backgroundColor: corInput,
        borderRadius: 30,
        height: 45,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        paddingLeft: 20,
        fontSize: 20,
        textAlign: "center",
        fontFamily: "Alata-Regular",

    },
    textoAlertaInputCadastro: {
        color: '#F00',
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "left",
        marginRight: 20,
        marginLeft: 20,
        // marginTop: 20
    },
    textoInputCadastroFooter: {
        backgroundColor: corInput,
        borderRadius: 30,
        height: 45,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 130,
        paddingLeft: 20,
        fontSize: 20,
        textAlign: "center",
        fontFamily: "Alata-Regular",
    },
    espacoBotaoCadastrar: {
        position: "absolute",
        left: "25%",
        right: "25%",
        marginTop: "150%",
    },
    tenhoConta: {
        position: "absolute",
        left: "28%",
        right: "26%",
        marginTop: "174%",
    },
    botaoCadastrar: {
        backgroundColor: corBotao,
        width: 200,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        marginTop: 25,
    },
    textoBotaoCadastrar: {
        fontSize: 32,
        color: "#000"
    },
    espacoLogoAjudaCadastro: {
        position: "absolute",
        right: -95,
        bottom: 405
    },
    logoAjudaCadastro: {
        width: 40,
        height: 40,
    },
    footer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    textoFooter: {
        fontSize: 20,
        color: "#000",
        fontFamily: "Alata-Regular",
    },
    logoAjuda: {
        width: 45,
        height: 45,
        position: 'absolute',
        bottom: 8,
        left: 145
    },
    //Estilização da tela login.
    logo: {
        width: 250,
        height: 250,
    },
    logoLogin: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        marginTop: 20
    },
    textoAlertaInputLogin: {
        color: '#F00',
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "left",
        marginRight: 20,
        marginLeft: 20,
        marginTop: 20
    },
    dadosLogin: {
        position: "absolute",
        marginTop: "80%",
        alignItems: "center",
        left: "10%",
        height: "10%",
    },
    textoInputLogin: {
        backgroundColor: corInput,
        borderRadius: 30,
        height: 67,
        width: 279,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        paddingLeft: 20,
        fontSize: 20,
        fontFamily: "Alata-Regular",
        textAlign: "center",
    },
    botaoLogin: {
        backgroundColor: corBotao,
        width: 215,
        height: 60,
        borderRadius: 15,
        marginTop: 25,
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    textoBotaoLogin: {
        fontFamily: "Alata-Regular",
        fontSize: 32,
        color: "#000"
    },
    footerLogin: {
        position: "absolute",
        width: "100%",
        height: "20%",
        marginTop: "150%",
        alignItems: "center"
    },
    espacoEsqueciSenha: {
        marginTop: -20,
        marginLeft: 120
    },
    textoEsqueciSenha: {
        fontFamily: "Alata-Regular",
        fontSize: 16,
        color: "#000",
    },
    logoCarregamentoLogin: {
        width: 300,
        height: 300,
    },
    //Cadastro de medicamento.
    logoCabecalhoCadastroMedicamentos: {
        width: 35,
        height: 35,
        marginLeft: -65
    },
    espacoCadastroMedicamento: {
        marginTop: 50,
        marginBottom: 180,
    },
    textoInputMedicamento: {
        fontSize: 20,
        fontFamily: "Alata-Regular",
        backgroundColor: corInput,
        borderRadius: 30,
        height: 45,
        marginLeft: 20,
        marginRight: 20,
        paddingLeft: 20,
        marginTop: 20,
        textAlign: "center"
    },
    textoAlertaInput: {
        color: '#F00',
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "left",
        marginRight: 20,
        marginLeft: 20,
        marginBottom: -20,
        marginTop: 20
    },
    textoAlertaInputList: {
        color: '#F00',
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "left",
        marginRight: 20,
        marginLeft: 20,
        marginBottom: -25,
        marginTop: 20
    },
    textoBotaoSalvar: {
        fontWeight: "bold",
        color: '#000',
        fontSize: 20
    },
    //Estilização da tela recuperar a senha.
    textoRecuperar: {
        fontSize: 25,
        width: 250,
        textAlign: "center",
        marginBottom: 25
    },
    // 
    listCadastroMedicamento: {
        backgroundColor: corInput,
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 30,
        borderColor: corInput,
        alignItems: "center",
        justifyContent: "center",
        height: 45,
        marginTop: 25,

    },
    inputListCadastroMedicamentos: {
        color: "#000",
        fontSize: 20,
        fontFamily: "Alata-Regular",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        margin: -50,


    },
    dropListCadastroMedicamentos: {
        color: "#000"

    },
    dropTextCadastroMedicamentos: {
        color: "#000",
        textAlign: "center",
        fontSize: 20,
        fontFamily: "Alata-Regular"


    },
    dropStyleCadastroMedicamentos: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 2,
        borderColor: corPesquisar

    },



    //Estilização da tela - menu.
    NavegacaoMenu: {
        backgroundColor: corMenu,
        width: "80%",
        height: 150,
        borderRadius: 15,
        marginTop: 30,
        paddingTop: 10,
        alignItems: "center",
    },
    NavegacaoMenuBaixo: {
        backgroundColor: "#9AE1F1",
        width: "80%",
        height: 150,
        borderRadius: 15,
        marginTop: 30,
        paddingTop: 10,
        alignItems: "center",
        marginBottom: 150,
    },
    logoNavegacaoMenu: {
        width: 100,
        height: 100
    },
    textoNavegacaoMenu: {
        fontFamily: "Alata-Regular",
        fontSize: 20,
        color: "#000"
    },
    footerNavegacao: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        marginBottom: 10,
    },
    footerNavegacaoPerfil: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        bottom: -65,
    },
    botaoNavegacao: {
        backgroundColor: corBotao,
        borderRadius: 10,
        width: 100,
        height: 100,
        margin: 10,
        alignItems: "center"
    },
    logoBotaoNavegacao: {
        width: 70,
        height: 70,
        marginTop: 5,
        marginBottom: -3
    },
    textoBotaoNavegacao: {
        fontFamily: "Alata-Regular",
        fontSize: 20,
        color: '#000',
    },
    //Estilização da tela teste da maleta.
    fundoTeste: {
        width: '90%',
        height: 455,
        backgroundColor: 'rgba(154, 225, 241, 0.4)',
        borderRadius: 15,
        marginTop: 15,
    },
    espacoFundo: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    botaoTeste: {
        width: 95,
        height: 95,
        backgroundColor: corBotao,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15
    },
    textoBotaoTeste: {
        // fontFamily: "Alata-Regular",
        fontWeight: "bold",
        fontSize: 64,
        color: "#000"
    },
    logoBotaoTeste: {
        width: 75,
        height: 75
    },
    //Estilização da tela chat.
    cabecalhoChat: {
        height: 40,
        // marginTop: 25,
        maxHeight: 45,
        backgroundColor: corCabecalho,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    textoCabecalhoChat: {
        fontSize: 22,
        fontWeight: "bold",
        fontStyle: "italic",
        color: '#222',
    },
    logoCabecalhoChat: {
        width: 35,
        height: 35,
        marginLeft: -160
    },
    footerMensagemChat: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    caixaMensagemChat: {
        backgroundColor: 'rgba(154, 225, 241, 0.4)',
        width: '100%',
        height: 70,
        paddingLeft: 15,
        fontSize: 20
    },
    logoMensagemChat: {
        width: 35,
        height: 35,
        position: "absolute",
        right: 15,
        bottom: 15
    },
    //Estilização da tela chat.
    logoCabecalhoChatComprar: {
        width: 35,
        height: 35,
        marginLeft: -145
    },
    //Estilização da tela agenda.
    logoRemedioAgenda: {
        width: 40,
        height: 40,
        marginLeft: 15,
        marginRight: 20
    },
    remedioAgenda: {
        backgroundColor: corMenu,
        borderRadius: 15,
        marginBottom: 20,
        height: 70,
        alignItems: "center",
        flexDirection: "row",
    },
    espacoRemedio: {
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 80,
    },
    textoRemedio: {
        fontSize: 20,
    },
    logoAdicionaRemedio: {
        width: 45,
        height: 45,
    },
    espacoLogoAdicionaRemedio: {
        position: "absolute",
        right: 15,
        bottom: 15,
    },
    //Estilização da tela logo.
    espacoLogo: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
        flexDirection: "column",
        marginBottom: 100
    },
    logoCarregamento: {
        width: 300,
        height: 300,
    },
    jsonCarregamento: {
        marginTop: 200
    },
    //Estilização da tela logo.
    espacoBotaoSalvar: {
        flexDirection: "row",
        justifyContent: 'flex-end',
        marginRight: 20,
        marginTop: 20
    },
    botaoSalvar: {
        backgroundColor: '#0AC4DD',
        borderRadius: 10,
        width: 90,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
    },

    //Estilização da tela - meus medicamentos.
    espacopesquisarMedicamentos: {
        backgroundColor: corPesquisar,
        width: 300,
        height: 45,
        borderRadius: 15,
        marginTop: 25,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    inputPesquisarMedicamentos: {
        marginLeft: 15
    },
    logoPesquisarMedicamentos: {
        width: 25,
        height: 25
    },
    espacoMeusMedicamentos: {
        height: "60%",
        marginTop: 30,
    },
    NavegacaoMenuMedicamentos: {
        backgroundColor: corMenu,
        width: "80%",
        height: 75,
        borderRadius: 15,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 10,
        marginBottom: 15,
        flexDirection: "row",
        alignItems: "center",

    },
    NavegacaoMenuMedicamentosBaixo: {
        backgroundColor: corMenu,
        width: "80%",
        height: 75,
        borderRadius: 15,
        paddingTop: 10,
        paddingLeft: 20,
        paddingRight: 10,
        marginBottom: 200,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between'
    },
    logoMeusMedicamentos: {
        width: 45,
        height: 45
    },
    logoNavegacaoEditMedicamentos: {
        marginTop: 20,
        width: 25,
        height: 25
    },
    espacoTextosMeusMedicamentos: {
        fontFamily: "Alata-Regular",
        marginLeft: 10
    },
    nomeMeusMedicamentos: {
        fontSize: 20,
        color: "#000",
    },
    descricaoMeusMedicamentos: {
        fontSize: 15,
        color: "#000",
    },
    footerNavegacaoMedicamentos: {
        position: 'absolute',
        flexDirection: "row",
        justifyContent: "center",
        left: 15,
        // top: 590,
        // bottom: 10
        marginTop: 590
    },
    modalViewMeusMedicamentos: {
        width: 365,
        height: 650,
        backgroundColor: corFundo,
        borderRadius: 20,
        alignItems: "center",
        elevation: 5,
        shadowRadius: 4,


        // margin: 20,
        // backgroundColor: 'white',
        // borderRadius: 20,
        // padding: 35,
        // alignItems: 'center',
        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
        // elevation: 5,
    },



    //Tela perfil.
    espacologoPerfil: {
        alignItems: "center"
    },
    logoPerfil: {
        width: 120,
        height: 120,
        marginTop: 20,
        borderRadius: 10,
    },
    espacoTextoPerfil: {
        alignItems: "center",
        marginTop: 20,
    },
    textoInputPerfil: {
        textAlign: "center",
        backgroundColor: corInput,
        color: "#000",
        fontFamily: "Alata-Regular",
        borderRadius: 30,
        height: 45,
        width: '90%',
        marginBottom: 15,
        paddingTop: 5,
        fontSize: 20,
    },
    textoSenhaPerfil: {
        fontFamily: "Alata-Regular",
        textAlign: 'center',
        color: "#000",
        fontSize: 20,
    },


    //
    modalTitulo: {
        fontFamily: "Alata-Regular",
        fontSize: 20,
        color: '#000',
        marginTop: 15,
        marginBottom: 15
    },
    espacoModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        width: 350,
        height: 310,
        backgroundColor: corFundo,
        borderRadius: 20,
        alignItems: "center",
        elevation: 5,
        shadowRadius: 4,


        // margin: 20,
        // backgroundColor: 'white',
        // borderRadius: 20,
        // padding: 35,
        // alignItems: 'center',
        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
        // elevation: 5,
    },
    tituloSenha: {
        alignSelf: 'flex-start',
        marginLeft: 20,
        fontSize: 18,
        color: '#000',
        fontFamily: "Alata-Regular",
        marginBottom: 5
    },
    espacoBotaoModal: {
        flexDirection: 'row',
        marginTop: 8
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    botaoSalvarPerfil: {
        backgroundColor: corBotao,
        width: 70,
        height: 40,
        margin: 5,
        borderRadius: 10,
        textAlign: "center",
        justifyContent: "center"
    },
    botaoVoltar: {
        backgroundColor: corBotao,
        width: 70,
        height: 40,
        margin: 5,
        borderRadius: 10,
        textAlign: "center",
        justifyContent: "center"
    },
    textStyle: {
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',
    },


});

export default styles;