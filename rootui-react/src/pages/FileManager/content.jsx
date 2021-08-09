/**
 * Styles
 */
import './style.scss';

/**
 * External Dependencies
 */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

/**
 * Internal Dependencies
 */
import Icon from '../../components/icon';
import DataTables from '../../components/data-tables';

/**
 * Component
 */
class Content extends Component {
    render() {
        return (
            <Fragment>
                <div className="rui-filemanager">
                    <div className="rui-filemanager-head">
                        <div className="row sm-gap vertical-gap align-items-center">
                            <div className="col">
                                <div className="input-group">
                                    <div className="input-group-prepend mnl-3">
                                        <button type="button" className="btn btn-clean btn-grey-5 mb-0 mnl-10">
                                            <Icon name="search" />
                                        </button>
                                    </div>
                                    <input type="search" className="form-control form-control-clean rui-search-input" placeholder="Type to search..." />
                                </div>
                            </div>
                            <div className="col-auto">
                                <button type="button" className="btn btn-brand btn-custom-round mnt-2">
                                    <Icon name="more-vertical" />
                                </button>
                            </div>
                            <div className="col-auto">
                                <button type="button" className="btn btn-brand btn-sm btn-uniform btn-round">
                                    <Icon name="plus" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="rui-filemanager-content">
                        <h2 className="h5 text-grey-5">Quick access</h2>
                        <div className="table-responsive-lg">
                            <table className="table rui-filemanager-table">
                                <tbody>
                                    <tr>
                                        <th className="rui-filemanager-table-name" scope="row">
                                            <span className="rui-filemanager-file">
                                                <Link className="rui-filemanager-file-link" to="#">
                                                    <Icon name="file-text" />
                                                    Project.doc
                                                </Link>
                                            </span>
                                        </th>
                                        <td className="rui-filemanager-table-size"><span className="rui-filemanager-file">1.4 GB</span></td>
                                        <td className="rui-filemanager-table-date"><span className="rui-filemanager-file">04.25.2020</span></td>
                                        <td className="rui-filemanager-table-icon">
                                            <span className="rui-filemanager-file">
                                                <Link className="rui-filemanager-file-icon mr-10" to="#">
                                                    <Icon name="link2" />
                                                </Link>
                                                <Link className="rui-filemanager-file-icon" to="#">
                                                    <Icon name="more-horizontal" />
                                                </Link>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="rui-filemanager-table-name" scope="row">
                                            <span className="rui-filemanager-file">
                                                <Link className="rui-filemanager-file-link" to="#">
                                                    <Icon name="file" />
                                                    Project-2.html
                                                </Link>
                                            </span>
                                        </th>
                                        <td className="rui-filemanager-table-size"><span className="rui-filemanager-file">2 GB</span></td>
                                        <td className="rui-filemanager-table-date"><span className="rui-filemanager-file">04.24.2020</span></td>
                                        <td className="rui-filemanager-table-icon">
                                            <span className="rui-filemanager-file">
                                                <Link className="rui-filemanager-file-icon mr-10" to="#">
                                                    <Icon name="link2" />
                                                </Link>
                                                <Link className="rui-filemanager-file-icon" to="#">
                                                    <Icon name="more-horizontal" />
                                                </Link>
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="table-responsive-lg">
                            <DataTables
                                className="rui-datatable rui-filemanager-table table mb-0"
                                data={ {
                                    order: [ 2, 'desc' ],
                                    paging: false,
                                    info: false,
                                    searching: false,
                                } }
                            >
                                <thead>
                                    <tr>
                                        <th scope="col">
                                            Name
                                            <Icon name="chevron-down" />
                                        </th>
                                        <th scope="col">
                                            File size
                                            <Icon name="chevron-down" />
                                        </th>
                                        <th scope="col">
                                            Last modified
                                            <Icon name="chevron-down" />
                                        </th>
                                        <th className="rui-datatable-empty" />
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row" className="rui-filemanager-table-name">
                                            <span className="rui-filemanager-file">
                                                <Link className="rui-filemanager-file-link" to="#">
                                                    <Icon name="file-text" />
                                                    Project.doc
                                                </Link>
                                            </span>
                                        </th>
                                        <td className="rui-filemanager-table-size"><span className="rui-filemanager-file">1.4 GB</span></td>
                                        <td className="rui-filemanager-table-date"><span className="rui-filemanager-file">04.25.2020</span></td>
                                        <td className="rui-filemanager-table-icon">
                                            <span className="rui-filemanager-file">
                                                <Link className="rui-filemanager-file-icon mr-10" to="#">
                                                    <Icon name="link2" />
                                                </Link>
                                                <Link className="rui-filemanager-file-icon" to="#">
                                                    <Icon name="more-horizontal" />
                                                </Link>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="rui-filemanager-table-name">
                                            <span className="rui-filemanager-file">
                                                <Link className="rui-filemanager-file-link" to="#">
                                                    <Icon name="file" />
                                                    Project-2.html
                                                </Link>
                                            </span>
                                        </th>
                                        <td className="rui-filemanager-table-size"><span className="rui-filemanager-file">2 GB</span></td>
                                        <td className="rui-filemanager-table-date"><span className="rui-filemanager-file">04.24.2020</span></td>
                                        <td className="rui-filemanager-table-icon">
                                            <span className="rui-filemanager-file">
                                                <Link className="rui-filemanager-file-icon mr-10" to="#">
                                                    <Icon name="link2" />
                                                </Link>
                                                <Link className="rui-filemanager-file-icon" to="#">
                                                    <Icon name="more-horizontal" />
                                                </Link>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="rui-filemanager-table-name">
                                            <span className="rui-filemanager-file">
                                                <Link className="rui-filemanager-file-link" to="#">
                                                    <Icon name="file" />
                                                    Project-1.html
                                                </Link>
                                            </span>
                                        </th>
                                        <td className="rui-filemanager-table-size"><span className="rui-filemanager-file">2.1 GB</span></td>
                                        <td className="rui-filemanager-table-date"><span className="rui-filemanager-file">04.23.2020</span></td>
                                        <td className="rui-filemanager-table-icon">
                                            <span className="rui-filemanager-file">
                                                <Link className="rui-filemanager-file-icon mr-10" to="#">
                                                    <Icon name="link2" />
                                                </Link>
                                                <Link className="rui-filemanager-file-icon" to="#">
                                                    <Icon name="more-horizontal" />
                                                </Link>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="rui-filemanager-table-name">
                                            <span className="rui-filemanager-file">
                                                <Link className="rui-filemanager-file-link" to="#">
                                                    <Icon name="file-text" />
                                                    Schedule.txt
                                                </Link>
                                            </span>
                                        </th>
                                        <td className="rui-filemanager-table-size"><span className="rui-filemanager-file">0.6 GB</span></td>
                                        <td className="rui-filemanager-table-date"><span className="rui-filemanager-file">04.22.2020</span></td>
                                        <td className="rui-filemanager-table-icon">
                                            <span className="rui-filemanager-file">
                                                <Link className="rui-filemanager-file-icon mr-10" to="#">
                                                    <Icon name="link2" />
                                                </Link>
                                                <Link className="rui-filemanager-file-icon" to="#">
                                                    <Icon name="more-horizontal" />
                                                </Link>
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </DataTables>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default connect( ( { settings } ) => (
    {
        settings,
    }
) )( Content );
