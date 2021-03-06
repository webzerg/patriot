/* ------------------------- External Dependencies -------------------------- */
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

/* ------------------------- Internal Dependencies -------------------------- */
import {
  notificationOpen
} from 'store/departments/actions'
import uPortConnection from 'logic/services/uPort';
import {
  UPORT_GET_WEB3_REQUEST,
  UPORT_GET_PROVIDER_REQUEST,
  UPORT_GET_CREDENTIALS_REQUEST,
  UPORT_GET_ADDRESS_REQUEST,
  UPORT_GET_ATTEST_CREDENTIALS_REQUEST,
  UPORT_INIT_CONTRACT_REQUEST,
  UPORT_SEND_TRANSACTION_REQUEST,
  UPORT_ADD_APP_PARAMETERS_REQUEST,
} from './actions'
import {
  uPortGetWeb3Success,
  uPortGetWeb3Failure,
  uPortGetProviderSuccess,
  uPortGetProviderFailure,
  uPortGetCredentialsSuccess,
  uPortGetCredentialsFailure,
  uPortGetAddressSuccess,
  uPortGetAddressFailure,
  uPortGetAttestCredentialsSuccess,
  uPortGetAttestCredentialsFailure,
  uPortInitContractSuccess,
  uPortInitContractFailure,
  uPortSendTransactionSuccess,
  uPortSendTransactionFailure,
  uPortAddAppParametersSuccess,
  uPortAddAppParametersFailure,
} from './actions'
if(!window.uport) window.uport = {
  contracts: {}
}

/*---*--- Get Web3 ---*---*/
function* getWeb3({payload, metadata}) {
  try {
    const web3 = yield uPortConnection.getWeb3()
    window.uport.web3 = web3
    yield put(uPortGetWeb3Success({
      payload: {}, 
      metadata
    }))
  } catch(e) {
    yield put(uPortGetWeb3Failure({payload: e, metadata}))
  }
}


/*---*--- Get Provider ---*---*/
function* getProvider({payload, metadata}) {
  try {
    const provider = yield uPortConnection.getProvider()
    window.uport.provider = provider
    yield put(uPortGetProviderSuccess({
      payload: {}, 
      metadata
    }))
  } catch(e) {
    yield put(uPortGetProviderFailure({payload: e, metadata}))
  }
}


/*---*--- Get Credentials ---*---*/
function* getCredentials({payload, metadata}) {
  try {
    yield put(notificationOpen({payload:{title: 'Requesting: Identity'}}))
    const requestedCredentials = payload
    const credentials = yield uPortConnection.requestCredentials(requestedCredentials)
    yield put(uPortGetCredentialsSuccess({
      payload: credentials, 
      metadata
    }))
    yield put(notificationOpen({payload:{
      title: 'Returned: Identity Request',
      message: `Welcome ${credentials.name} to Eidenai`
    }}))
  } catch(e) {
    yield put(uPortGetCredentialsFailure({payload: e, metadata}))
    yield put(notificationOpen({payload:{
      title: 'Failure: Identity Request ',
      message: 'The Request was cancelled',
    }}))
  }
}


/*---*--- Get Address ---*---*/
function* getAddress({payload, metadata}) {
  try {
    yield put(notificationOpen({payload:{title: 'Requesting: Address '}}))
    const { uriHandler } = payload
    const address = yield uPortConnection.requestAddress(uriHandler)
    yield put(uPortGetAddressSuccess({
      payload: address, 
      metadata
    }))
    yield put(notificationOpen({payload:{title: 'Returned: Addess Request '}}))
  } catch(e) {
    yield put(uPortGetAddressFailure({payload: e, metadata}))
    yield put(notificationOpen({payload:{title: 'Failure: Addess Request '}}))
  }
}


/*---*--- Get Attest Credentials ---*---*/
function* getAttestCredentials({payload, metadata}) {
  try {
    yield put(notificationOpen({payload:{title: 'Requesting: Attest Information '}}))
    const { credentials, uriHandler } = payload
    const address = yield uPortConnection.attestCredentials(payload, uriHandler)
    yield put(uPortGetAttestCredentialsSuccess({
      payload: address, 
      metadata
    }))
    yield put(notificationOpen({payload:{title: 'Confirmed: Application received Attest Request '}}))
  } catch(e) {
    yield put(uPortGetAttestCredentialsFailure({payload: e, metadata}))
  }
}


/*---*--- Init Contract ---*---*/
function* initContract({payload, metadata}) {
  try {
    const { ethAbi } = payload
    const { delta } = metadata
    const uPortContractObject = yield uPortConnection.contract(ethAbi)
    window.uport.contracts[delta] = uPortContractObject
    window.uport.contracts[delta].at('2omEwA8DWf3876sYn5KzfCz2J2rUVy5PuoR')
    yield put(uPortInitContractSuccess({
      payload: {}, 
      metadata
    }))
  } catch(e) {
    yield put(uPortInitContractFailure({payload: e, metadata}))
  }
}


/*---*--- Send Transaction ---*---*/
function* sendTransaction({payload, metadata}) {
  try {
    const { transaction } = payload
    const transactionId = yield uPortConnection.sendTransaction(transaction)
    yield put(uPortSendTransactionSuccess({
      payload: transactionId, 
      metadata
    }))
  } catch(e) {
    yield put(uPortSendTransactionFailure({payload: e, metadata}))
  }
}


/*---*--- Add App Parameters ---*---*/
function* addAppParameters({payload, metadata}) {
  try {
    const { transaction } = payload
    const paramResponse = yield uPortConnection.addAppParameters(transaction)
    yield put(uPortAddAppParametersSuccess({
      payload: paramResponse, 
      metadata
    }))
  } catch(e) {
    yield put(uPortAddAppParametersFailure({payload: e, metadata}))
  }
}

export default function* rxdbRootSaga() {
  yield [
   takeEvery(UPORT_GET_WEB3_REQUEST, getWeb3),
   takeEvery(UPORT_GET_PROVIDER_REQUEST, getProvider),
   takeEvery(UPORT_GET_CREDENTIALS_REQUEST, getCredentials),
   takeEvery(UPORT_GET_ADDRESS_REQUEST, getAddress),
   takeEvery(UPORT_GET_ATTEST_CREDENTIALS_REQUEST, getAttestCredentials),
   takeEvery(UPORT_INIT_CONTRACT_REQUEST, initContract),
   takeEvery(UPORT_SEND_TRANSACTION_REQUEST, sendTransaction),
   takeEvery(UPORT_ADD_APP_PARAMETERS_REQUEST, addAppParameters),
  ];
}