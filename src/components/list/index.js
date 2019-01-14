import React from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as ReportActions from '../../store/actions'
import download from '../../assets/img/download.svg'
import error from '../../assets/img/cross.svg'
import report from '../../assets/img/to-do.svg'
import success from '../../assets/img/checkmark.svg'
import trash from '../../assets/img/trash.svg'
import Moment from 'react-moment'
import './styles.css'

const List = (props) => (
    <div className="container-fluid">
        <div className="row-fluid title">
            <h5 className="title"><img src={report} className="icon img-responsive" alt="icon" /> Histórico de Relatórios</h5>
        </div>
        <div className='table-responsive'>
            <table className="table table-hover">
                <thead className="head">
                    <tr>
                        <th>DATA</th>
                        <th>DETALHES</th>
                        <th>STATUS</th>
                        <th className='text-center'>DOWNLOAD</th>
                        <th className='text-center'>EXCLUIR</th>
                    </tr>
                </thead>
                <tbody>
                    {props.reports.data !== undefined ?
                        props.reports.data.map(report => (
                            <tr key={report.id}>
                                <td><Moment format="DD/MM/YYYY" date={report.createAt} /></td>
                                <td>{report.name}</td>
                                <td>
                                    {report.status === "Created" ?
                                        <span><img src={success} className="icon img-responsive" alt="success" /> Concluído </span>
                                        : <span><img src={error} className="icon img-responsive" alt="error" /> Erro </span>}
                                </td>
                                <td className='text-center'>
                                    <a href={'data:text/json;charset=utf-8,'
                                        + encodeURIComponent(JSON.stringify(report))} download="report.json">
                                        <img src={download} className="icon icon-green img-responsive" alt="download" />
                                    </a>
                                </td>
                                <td className='text-center'>
                                    <a href="#delete" onClick={() => {
                                        props.deleteReport(report.id)
                                    }}><img src={trash} className="icon icon-green img-responsive" alt="trash" /></a>
                                </td>
                            </tr> )) 
                     : <tr><td colSpan={5}>Opa! Não foi possível carregar as informações...</td></tr> }
                    {props.reports.loading && <tr><td colSpan={5}>Carregando...</td></tr>}
                </tbody>
            </table>
        </div>
    </div>
);

const mapStateToProps = state => ({
    reports: state.reports,
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(ReportActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);