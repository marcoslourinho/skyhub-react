import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import alert from 'sweetalert2'
import * as ReportActions from '../../store/actions'
import api from '../../services/api'
import report from '../../assets/img/article.svg'
import trash from '../../assets/img/trash.svg'
import './styles.css'

class Panel extends Component {

     state = {
          platforms: [],
          platform_id: null,
          start_date: null,
          end_date: null,
     }

     componentWillMount() {
          this.getPlatforms();
     }

     getPlatforms = async () => {
          try {
               const response = await api.get('/platforms');
               this.setState({ platforms: response.data });
          } catch (error) {
               console.log(error);
          }
     }

     handleValidation = () => {
          const { platform_id, start_date, end_date } = this.state;
          let formIsValid = true;
          if (!platform_id || !start_date || !end_date) {
               return formIsValid = false;
          } else {
               return formIsValid;
          }
     }

     newReport = () => {
          if (this.handleValidation()) {
               const { platform_id, start_date, end_date } = this.state;

               this.props.createReport({
                    platform_id: platform_id,
                    start_date: start_date,
                    end_date: end_date
               });

               this.setState({
                    platform_id: null,
                    start_date: null,
                    end_date: null
               });

               this.form.reset();

               alert("Excelente!", "Seu relatório foi gerado com sucesso!", "success");

          } else {
               alert("Opa!", "Por favor, preencha todos os campos!", "error");
          }
     };

     render() {
          return (
               <div className='container-fluid'>
                    <div className="row-fluid title">
                         <h5 className="title">
                              <img src={report} className="icon img-responsive" alt="icon" /> Solicite novos relatórios
                         </h5>
                    </div>
                    <div className="container-fluid card">
                         <form className="form-horizontal" ref={(ref) => this.form = ref}>
                              <div className="card-body row">
                                   <div className="col-md-3">
                                        <div className="form-group">
                                             <label htmlFor="platform">PLATAFORMAS</label>
                                             <div className="select">
                                                  <select className="select-text"
                                                       onChange={(e) => {
                                                            this.setState({ platform_id: e.nativeEvent.target[e.target.selectedIndex].value })
                                                       }}>
                                                       <option value="0" select="true" className="select-label">Selecione...</option>
                                                       {this.state.platforms.map(platform => (
                                                            <option key={platform.id} value={platform.id}>{platform.name}</option>
                                                       ))}
                                                  </select>
                                                  <span className="select-bar"></span>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-md-3">
                                        <div className="form-group">
                                             <label htmlFor="start_date">DATA INICIAL</label>
                                             <input type="date"
                                                  className="input-sky"
                                                  onChange={(e) => { this.setState({ start_date: e.target.value }) }}
                                             />
                                             <span className="input-bar"></span>
                                        </div>
                                   </div>
                                   <div className="col-md-3">
                                        <div className="form-group">
                                             <label name="end_date">DATA FINAL</label>
                                             <input type="date"
                                                  className="input-sky"
                                                  onChange={(e) => { this.setState({ end_date: e.target.value }) }}
                                             />
                                             <span className="input-bar"></span>
                                        </div>
                                   </div>

                                   <div className="col-md-3 margin-panel">
                                        <a href="#clear" className="filter-link"
                                             onClick={() => { this.form.reset() }}>
                                             <img src={trash} className="icon img-responsive" alt="icon"/> Limpar filtros
                                        </a>
                                        <button className="btn btn-primary btn-round-sm"
                                             onClick={(e) => {
                                                  e.preventDefault();
                                                  this.newReport();
                                             }}>
                                             <span className="text">Solicitar relatório</span>
                                        </button>
                                   </div>
                              </div>
                         </form>
                    </div>
               </div>
          );
     };
}

const mapStateToProps = state => ({
     reports: state.reports,
})

const mapDispatchToProps = dispatch =>
     bindActionCreators(ReportActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Panel);
