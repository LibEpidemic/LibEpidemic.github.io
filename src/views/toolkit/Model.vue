<template>
    <div class="container">
        <div class="header">
            <div style="padding-top: 20px;color: white;">
                <p style="margin: 20px 0 30px 130px; font-size: 60px">Parameter</p>
                <p style="margin: 0px 0 20px 130px; font-size: 30px">
                    LibEpidemic provides 4 APIs for building the formula and parameters<br> 
                    which can be seen at compartment/Transfer.py.
                </p>
            </div>
        </div>

        <div class="content">
            <div>
                <div style="width: 80%; margin: 10px auto 20px auto; text-align: center">
                    <img
                    src="../../assets/img/param.png"
                    alt="toolkit"
                    height="300"
                    />
                </div>
                <p class="title">Set Path Exp</p>
                <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
                <div class="code">
                    <code data-lang="python">
                        def set_path_exp(model: Model, pre_name: str, next_name: str, exp: str):
                    </code>
                </div>
                <p>LibEpidemic provide set_path_exp to allow user define the principal with a simple string like "beta*S*I*popu" (popu = 1/N). Here are some examples:</p>
                <div class="code">
                    <code data-lang="python">
                        set_path_exp(model, 'S', 'E', 'beta*S*I*popu')<br>
                        set_path_exp(model, 'E', 'I', 'alpha*E')<br>
                        set_path_exp(model, 'I', 'R', 'gamma*I')
                    </code>
                </div>
                <br>
                <p class="title">Set Path Parameters</p>
                <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
                <div class="code">
                    <code data-lang="python">
                        def set_path_parameters(model: Model, pre_name: str, next_name: str, parameter_name: str, parameter: float = None, embedding: list = None):
                    </code>
                </div>
                <p>LibEpidemic provide set_path_exp to allow user fill those parameters with exact figure. Here are some examples:</p>
                <div class="code">
                    <code data-lang="python">
                        set_path_parameters(model, 'S', 'E', 'beta', embedding = [0.3,0.5,0.3,0.3,0.1])<br>
                        set_path_parameters(model, 'S', 'E', 'popu', 1.0 / 1000000)<br>
                        set_path_parameters(model, 'E', 'I', 'alpha', 0.14)<br>
                        set_path_parameters(model, 'I', 'R', 'gamma', 0.2)
                    </code>
                </div>
                <br>
                <p class="title">Reset Parameters</p>
                <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
                <div class="code">
                    <code data-lang="python">
                        def reset_parameters(model: Model, parameter_name: str, parameter: float):
                    </code>
                </div>
                <p>LibEpidemic provide reset_parameters to help researchers build this type of epidemic models:<br>
                <ul>
                    <li>Parameters are not static</li>
                    <li>Parameters varies with time</li>
                    <li>The exact figure of each parameter cannot be determined before simulation</li>
                </ul>
                That is, researchers need results from previously simulation of the model to determine the value of parameters afterwards.
                </p>
                <p>Here is an example: researcher use an index calculated by the number of death and infectious individuals called "awareness", to modify transmission parameter "beta" afterwards.</p>
                <div class="code">
                    <code data-lang="python">
                        for index in range(days):<br>
                            tmp_value = model.get_values()<br>
                            Dday = gamma * tmp_value['I'] * frac_D<br>
                            Iday = beta * tmp_value['S'] * tmp_value['I'] / (1 + (Dday / Dcrit) ** awareness)<br>
                            Ddays.append(Dday*N)<br>
                            Dq.append(N*Dcrit*(R0**(1/awareness)-1)*2)<br>
                            Idays.append(Iday*N)<br>
                            Iq.append(N*Dcrit*(R0**(1/awareness)-1)*2/frac_D)<br>
                            print(reset_parameters(model, 'beta', beta / (1 + (Dday / Dcrit) ** awareness)))<br>
                            executor.simulate_step(index)
                    </code>
                </div>
                <br>
            </div>
        </div>
    </div>
</template>

<script>
    import modelTable from './modelTable.vue'

    const flow = [
        {
            model: 'ST-ResNet',
            mlink: '#',
            from: 'AAAI',
            year: '2017',
            paper: 'Deep Spatio-Temporal Residual Networks for Citywide Crowd Flows Prediction',
            plink: 'https://arxiv.org/abs/1610.00081'
        },
        {
            model: 'ACFM',
            mlink: '#',
            from: 'ACM MM',
            year: '2018',
            paper: 'ACFM: A Dynamic Spatial-Temporal Network for Traffic Prediction',
            plink: 'https://dl.acm.org/doi/10.1145/3240508.3240681'
        },
        {
            model: 'ASTGCN',
            mlink: '#',
            from: 'AAAI',
            year: '2019',
            paper: 'Attention Based Spatial-Temporal Graph Convolutional Networks for Traffic Flow Forecasting',
            plink: 'https://www.aaai.org/ojs/index.php/AAAI/article/view/3881'
        },
        {
            model: 'MSTGCN',
            mlink: '#',
            from: 'AAAI',
            year: '2019',
            paper: 'Attention Based Spatial-Temporal Graph Convolutional Networks for Traffic Flow Forecasting',
            plink: 'https://www.aaai.org/ojs/index.php/AAAI/article/view/3881'
        },
        {
            model: 'AGCRN',
            mlink: '#',
            from: 'NIPS',
            year: '2020',
            paper: 'Adaptive Graph Convolutional Recurrent Network for Traffic Forecasting',
            plink: 'https://arxiv.org/abs/2007.02842'
        },
        {
            model: 'Conv-GCN',
            mlink: '#',
            from: 'IET-ITS',
            year: '2020',
            paper: 'Multi-Graph Convolutional Network for Short-Term Passenger Flow Forecasting in Urban Rail Transit',
            plink: 'https://arxiv.org/abs/2001.07512'
        },
        {
            model: 'STDN',
            mlink: '#',
            from: 'AAAI',
            year: '2019',
            paper: 'Revisiting Spatial-Temporal Similarity: A Deep Learning Framework for Traffic Prediction',
            plink: 'https://arxiv.org/abs/1803.01254'
        },
        {
            model: 'STSGCN',
            mlink: '#',
            from: 'AAAI',
            year: '2020',
            paper: 'Spatial-Temporal Synchronous Graph Convolutional Networks: A New Framework for Spatial-Temporal Network Data Forecasting',
            plink: 'https://www.aaai.org/ojs/index.php/AAAI/article/view/5438'
        },
        {
            model: 'ToGCN',
            mlink: '#',
            from: 'TITS',
            year: '2020',
            paper: 'Topological Graph Convolutional Network-Based Urban Traffic Flow and Density Prediction',
            plink: 'https://ieeexplore.ieee.org/abstract/document/9247476'
        },
        {
            model: 'ResLSTM',
            mlink: '#',
            from: 'TITS',
            year: '2020',
            paper: 'Deep Learning Architecture for Short-Term Passenger Flow Forecasting in Urban Rail Transit',
            plink: 'https://ieeexplore.ieee.org/abstract/document/9136910/'
        },
        {
            model: 'CRANN',
            mlink: '#',
            from: 'Applied Soft Computing',
            year: '2020',
            paper: 'A Spatio-Temporal Spot-Forecasting Framework forUrban Traffic Prediction',
            plink: 'https://arxiv.org/abs/2003.13977'
        },
        {
            model: 'Multi-STGCnet',
            mlink: '#',
            from: 'IJCNN',
            year: '2020',
            paper: 'Multi-STGCnet: A Graph Convolution Based Spatial-Temporal Framework for Subway Passenger Flow Forecasting',
            plink: 'https://ieeexplore.ieee.org/abstract/document/9207049'
        },
        {
            model: 'DGCN',
            mlink: '#',
            from: 'TITS',
            year: '2020',
            paper: 'Dynamic Graph Convolution Network for Traffic Forecasting Based on Latent Network of Laplace Matrix Estimation',
            plink: 'https://ieeexplore.ieee.org/abstract/document/9190068'
        },
        {
            model: 'DSAN',
            mlink: '#',
            from: 'SIGKDD',
            year: '2020',
            paper: 'Preserving Dynamic Attention for Long-Term Spatial-Temporal Prediction',
            plink: 'https://dl.acm.org/doi/10.1145/3394486.3403046'
        },
        {
            model: 'STNN',
            mlink: '#',
            from: 'ICDM',
            year: '2017',
            paper: 'Spatio-Temporal Neural Networks for Space-Time Series Forecasting and Relations Discovery',
            plink: 'https://ieeexplore.ieee.org/document/8215543'
        },
    ]

    const speed = [
        {
            model: 'DCRNN',
            mlink: '#',
            from: 'ICLR',
            year: '2018',
            paper: 'Diffusion Convolutional Recurrent Neural Network: Data-Driven Traffic Forecasting',
            plink: 'https://arxiv.org/abs/1707.01926' 
        },
        {
            model: 'STGCN',
            mlink: '#',
            from: 'IJCAI',
            year: '2018',
            paper: 'Spatio-Temporal Graph Convolutional Networks: A Deep Learning Framework for Traffic Forecasting',
            plink: 'https://arxiv.org/abs/1709.04875' 
        },
        {
            model: 'GWNET',
            mlink: '#',
            from: 'IJCAI',
            year: '2019',
            paper: 'Graph Wavenet for Deep Spatial-Temporal Graph Modeling',
            plink: 'https://arxiv.org/abs/1906.00121' 
        },
        {
            model: 'MTGNN',
            mlink: '#',
            from: 'SIGKDD',
            year: '2020',
            paper: 'Connecting the Dots: Multivariate Time Series Forecasting with Graph Neural Networks',
            plink: 'https://arxiv.org/abs/2005.11650' 
        },
        {
            model: 'T-GCN',
            mlink: '#',
            from: 'TITS',
            year: '2020',
            paper: 'T-GCN: A Temporal Graph Convolutional Network for Traffic Prediction',
            plink: 'https://ieeexplore.ieee.org/abstract/document/8809901/'
        },
        {
            model: 'TGC-LSTM',
            mlink: '#',
            from: 'TITS',
            year: '2020',
            paper: 'Traffic Graph Convolutional Recurrent Neural Network: A Deep Learning Framework for Network-Scale Traffic Learning and Forecasting',
            plink: 'https://ieeexplore.ieee.org/abstract/document/8917706'
        },
        {
            model: 'ATDM',
            mlink: '#',
            from: 'arXiv',
            year: '2020',
            paper: 'On the Inclusion of Spatial Information for Spatio-Temporal Neural Networks',
            plink: 'https://arxiv.org/abs/2007.07559' 
        },
        {
            model: 'GMAN',
            mlink: '#',
            from: 'AAAI',
            year: '2020',
            paper: 'GMAN:A Graph Multi-Attention Network for Traffic Prediction',
            plink: 'https://arxiv.org/abs/1911.08415' 
        },
        {
            model: 'GTS',
            mlink: '#',
            from: 'ICLR',
            year: '2021',
            paper: 'Discrete Graph Structure Learning for Forecasting Multiple Time Series',
            plink: 'https://arxiv.org/abs/2101.06861' 
        },
        {
            model: 'STAG-GCN',
            mlink: '#',
            from: 'CIKM',
            year: '2020',
            paper: 'Spatiotemporal Adaptive Gated Graph Convolution Network for Urban Traffic Flow Forecasting',
            plink: 'https://dl.acm.org/doi/10.1145/3340531.3411894' 
        },
        {
            model: 'HGCN',
            mlink: '#',
            from: 'AAAI',
            year: '2021',
            paper: 'Hierarchical Graph Convolution Networks for Traffic Forecasting',
            plink: 'https://ojs.aaai.org/index.php/AAAI/article/view/16088' 
        },
        {
            model: 'ST-MGAT',
            mlink: '#',
            from: 'ICTAI',
            year: '2020',
            paper: 'ST-MGAT: Spatial-Temporal Multi-Head Graph Attention Networks for Traffic Forecasting',
            plink: 'https://ieeexplore.ieee.org/abstract/document/9288309'
        },
        {
            model: 'DKFN',
            mlink: '#',
            from: 'SIGSPATIAL',
            year: '2020',
            paper: 'Graph Convolutional Networks with Kalman Filtering for Traffic Prediction',
            plink: 'https://dl.acm.org/doi/abs/10.1145/3397536.3422257' 
        },
        {
            model: 'STTN',
            mlink: '#',
            from: 'arXiv',
            year: '2020',
            paper: 'Spatial-Temporal Transformer Networks for Traffic Flow Forecasting',
            plink: 'https://arxiv.org/abs/2001.02908' 
        },
    ]

    const demand = [
        {
            model: 'DMVST-Net',
            mlink: '#',
            from: 'AAAI',
            year: '2018',
            paper: 'Deep Multi-View Spatial-Temporal Network for Taxi Demand Prediction',
            plink: 'https://arxiv.org/abs/1802.08714'
        },
        {
            model: 'STG2Seq',
            mlink: '#',
            from: 'IJCAI',
            year: '2019',
            paper: 'Stg2seq: Spatial-temporal graph to sequence model for multi-step passenger demand forecasting',
            plink: 'https://arxiv.org/abs/1905.10069'
        },
        {
            model: 'CCRNN',
            mlink: '#',
            from: 'AAAI',
            year: '2021',
            paper: 'Coupled Layer-wise Graph Convolution for Transportation Demand Prediction',
            plink: 'https://arxiv.org/abs/2012.08080'
        },
    ]

    const od = [
        {
            model: 'GEML',
            mlink: '#',
            from: 'SIGKDD',
            year: '2019',
            paper: 'Origin-Destination Matrix Prediction via Graph Convolution: a New Perspective of Passenger Demand Modeling',
            plink: 'https://dl.acm.org/doi/10.1145/3292500.3330877'
        },
        {
            model: 'CSTN',
            mlink: '#',
            from: 'TITS',
            year: '2019',
            paper: 'Contextualized Spatial-Temporal Network for Taxi Origin-Destination Demand Prediction',
            plink: 'https://arxiv.org/abs/1905.06335'
        },
    ]

    const accident = [
        {
            model: 'GSNet',
            mlink: '#',
            from: 'AAAI',
            year: '2021',
            paper: 'GSNet: Learning Spatial-Temporal Correlations from Geographical and Semantic Aspects for Traffic Accident Risk Forecasting',
            plink: 'https://ojs.aaai.org/index.php/AAAI/article/view/16566'
        },
    ]

    const location = [
        {
            model: 'FPMC',
            mlink: '#',
            from: 'WWW',
            year: '2010',
            paper: 'Factorizing Personalized Markov Chains for Next-Basket Recommendation',
            plink: 'https://dl.acm.org/doi/10.1145/1772690.1772773'
        },
        {
            model: 'ST-RNN',
            mlink: '#',
            from: 'AAAI',
            year: '2016',
            paper: 'Predicting the Next Location: A Recurrent Model with Spatial and Temporal Contexts',
            plink: 'https://www.aaai.org/ocs/index.php/AAAI/AAAI16/paper/viewPDFInterstitial/11900/11583'
        },
        {
            model: 'ATST-LSTM',
            mlink: '#',
            from: 'IEEE TSC',
            year: '2019',
            paper: 'An Attention-based Spatiotemporal LSTM Network for Next POI Recommendation',
            plink: 'https://ieeexplore.ieee.org/abstract/document/8723186'
        },
        {
            model: 'Serm',
            mlink: '#',
            from: 'CIKM',
            year: '2017',
            paper: 'SERM: A Recurrent Model for Next Location Prediction in Semantic Trajectories',
            plink: 'https://dl.acm.org/doi/10.1145/3132847.3133056'
        },
        {
            model: 'DeepMove',
            mlink: '#',
            from: 'WWW',
            year: '2018',
            paper: 'DeepMove: Predicting Human Mobility with Attentional Recurrent Networks',
            plink: 'https://dl.acm.org/doi/10.1145/3178876.3186058'
        },
        {
            model: 'HST-LSTM',
            mlink: '#',
            from: 'IJCAI',
            year: '2018',
            paper: 'HST-LSTM: A Hierarchical Spatial-Temporal Long-Short Term Memory Network for Location Prediction',
            plink: 'https://www.ijcai.org/proceedings/2018/324'
        },
        {
            model: 'LSTPM',
            mlink: '#',
            from: 'AAAI',
            year: '2020',
            paper: 'Where to Go Next: Modeling Long- and Short-Term User Preferences for Point-of-Interest Recommendation',
            plink: 'https://ojs.aaai.org//index.php/AAAI/article/view/5353'
        },
        {
            model: 'GeoSAN',
            mlink: '#',
            from: 'SIGKDD',
            year: '2020',
            paper: 'Geography-Aware Sequential Location Recommendation',
            plink: 'https://dl.acm.org/doi/pdf/10.1145/3394486.3403252'
        },
        {
            model: 'STAN',
            mlink: '#',
            from: 'WWW',
            year: '2021',
            paper: 'STAN: Spatio-Temporal Attention Network for Next Location Recommendation',
            plink: 'https://arxiv.org/abs/2102.04095'
        },
        {
            model: 'CARA',
            mlink: '#',
            from: 'SIGIR',
            year: '2018',
            paper: 'A Contextual Attention Recurrent Architecture for Context-Aware Venue Recommendation',
            plink: 'https://dl.acm.org/doi/10.1145/3209978.3210042'
        },
    ]

    const eta = [
        {
            model: 'DeepTTE',
            mlink: '#',
            from: 'AAAI',
            year: '2018',
            paper: 'When Will You Arrive? Estimating Travel Time Based on Deep Neural Networks',
            plink: 'https://ojs.aaai.org/index.php/AAAI/article/view/11877'
        },
    ]

    const mm = [
        {
            model: 'ST-Matching',
            mlink: '#',
            from: 'SIGSPATIAL',
            year: '2009',
            paper: 'Map-Matching for Low-Sampling-Rate GPS Trajectories',
            plink: 'https://dl.acm.org/doi/10.1145/1653771.1653820'
        },
        {
            model: 'IVMM',
            mlink: '#',
            from: 'MDM',
            year: '2010',
            paper: 'An Interactive-Voting Based Map Matching Algorithm',
            plink: 'https://ieeexplore.ieee.org/document/5489808'
        },
        {
            model: 'HMMM',
            mlink: '#',
            from: 'SIGSPATIAL',
            year: '2009',
            paper: 'Hidden Markov map matching through noise and sparseness',
            plink: 'https://dl.acm.org/doi/10.1145/1653771.1653818'
        },
    ]

    const representation = [
        {
            model: 'ChebConv',
            mlink: '#',
            from: 'NIPS',
            year: '2016',
            paper: 'Convolutional Neural Networks on Graphs with Fast Localized Spectral Filtering',
            plink: 'https://arxiv.org/abs/1606.09375'
        },
        {
            model: 'LINE',
            mlink: '#',
            from: 'WWW',
            year: '2015',
            paper: 'LINE: Large-scale Information Network Embedding',
            plink: 'https://arxiv.org/abs/1503.03578'
        },
    ]

    export default {
        data() {
            return {
                flow,
                speed,
                demand,
                od,
                accident,
                location,
                eta,
                mm,
                representation,
            };
        },
        components: {
            modelTable
        }
    };
</script>

<style scoped>
.container {
  margin: auto;
  width: 100%;
  height: auto;
  /* border: red solid 1px; */
}
.header {
  width: 100%;
  min-height: 300px;
  background:  rgb(27, 140, 233) linear-gradient(to right,  rgb(27, 140, 233), rgb(11, 247, 188));
  /* border: blue solid 1px; */
}
.content {
    width: 80%;
    height: auto;
    margin: 50px auto 0 auto;
    font-size: 20px;
    line-height: 36px;
    color: black;
    font-family: 'Open Sans', 'Microsoft YaHei', Arial, Helvetica, sans-serif;
    /* border: blue solid 3px; */
}
.title {
    font-size: 32px;
    font-weight: 700;
    font-family: 'Open Sans', 'Microsoft YaHei', Arial, Helvetica, sans-serif;
    margin-bottom: 0;
}
.code {
    color: #f8f8f2;
    background-color: #272822;
    tab-size: 4;
    overflow: auto;
    width: 100%;
    padding: 10px 20px;
    margin: 0px 0px 16px 0px;
    text-align: left;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    line-height: 1.5;
}

</style>