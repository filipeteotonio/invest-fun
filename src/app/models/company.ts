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
        'vol_med_(2m)': '',
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
        'p/l': '',
        'lpa': '',
        'p/vp': '',
        'vpa': '',
        'p/ebit': '',
        'marg_bruta': '',
        'psr': '',
        'marg_ebit': '',
        'p/ativos': '',
        'marg_liquida': '',
        'p/cap_giro': '',
        'ebit/ativo': '',
        'p/ativ_circ_liq': '',
        'roic': '',
        'div_yield': '',
        'roe': '',
        'ev/ebit': '',
        'liquidez_corr': '',
        'giro_ativos': '',
        'div_br/patrim': '',
        'cres_rec_(5a)': '',
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
