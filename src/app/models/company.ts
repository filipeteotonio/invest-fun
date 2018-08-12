export class Company {

    info: any = {
        'papel': '',
        'cotacao': '',
        'tipo': '',
        'data_ult_cot': '',
        'empresa': '',
        'min_52_sem': '',
        'setor': '',
        'max_52_sem': '',
        'subsetor': '',
        'vol_med_2m': '',
        'valor_de_mercado': '',
        'ult_balanco_processado': '',
        'valor_da_firma': '',
        'nro_acoes': '',
    };

    oscilations: any = {
        '2013': '',
        '2014': '',
        '2015': '',
        '2016': '',
        '2017': '',
        '2018': '',
        'dia': '',
        'mes': '',
        '30_dias': '',
        '12_meses': '',
    };

    fundamentals: any = {
        'p_l': '',
        'lpa': '',
        'p_vp': '',
        'vpa': '',
        'p_ebit': '',
        'marg_bruta': '',
        'psr': '',
        'marg_ebit': '',
        'p_ativos': '',
        'marg_liquida': '',
        'p_cap_giro': '',
        'ebit_ativo': '',
        'p_ativ_circ_liq': '',
        'roic': '',
        'div_yield': '',
        'roe': '',
        'ev_ebit': '',
        'liquidez_corr': '',
        'giro_ativos': '',
        'div_br_patrim': '',
        'cres_rec_5a': '',
    };

    patrimonial_balance_data: any = {
        'ativo': '',
        'div_bruta': '',
        'disponibilidades': '',
        'div_liquida': '',
        'ativo_circulante': '',
        'patrim_liq': '',
    };

    demonstrative_results_data: any = {
        last_year:  {
            'receita_liquida': '',
            'ebit': '',
            'lucro_liquido': '',
        },

        last_quarter: {
            'receita_liquida': '',
            'ebit': '',
            'lucro_liquido': '',
        }
    };

    constructor () {

    }


}
