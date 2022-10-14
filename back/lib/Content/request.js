const path = require ('path')

module.exports = {

////////////////////////////////////////////////////////////////////////////////

get_xsd_path_of_request:

    function () {

		return path.join (__dirname, '..', 'Static/10.13.I-1.0.4.xsd')
    
    },

////////////////////////////////////////////////////////////////////////////////

get_request_of_request:

    function () {
/*
    	throw new Error (`
			<faultcode>SOAP-ENV:Server</faultcode>
			<faultstring xml:lang=\"en\">Очередь, в которую должно быть отправлено сообщение, переполнена.</faultstring>
			<detail><ns3:DestinationOverflow xmlns:ns3=\"urn://x-artefacts-smev-gov-ru/services/message-exchange/types/faults/1.1\" xmlns:ns2=\"urn://x-artefacts-smev-gov-ru/services/message-exchange/types/basic/1.1\" xmlns:ns4=\"urn://x-artefacts-smev-gov-ru/services/message-exchange/types/1.1\"><ns2:Code>fed0:PRODUCTION_AREA:FED0_CORE2 : TR:SYNC:PP:15</ns2:Code><ns2:Description>SMEV-600:Очередь, в которую должно быть отправлено сообщение, переполнена.</ns2:Description><ns3:MessageBrokerAddress>unknown</ns3:MessageBrokerAddress><ns3:DestinationName>delivery.it_315626_MNSV14_3S._REQUEST_</ns3:DestinationName></ns3:DestinationOverflow></detail>
    	`)
*/
		return this.rq.data
    	
    },

////////////////////////////////////////////////////////////////////////////////

get_response_of_request:

    function () {
    
    	let {rq: {data}} = this

    	return {    	

			  "response": {
				"statementData": {
				  "SNILS": "34935753517",
				  "assignments": {
					"assignment": [
					  {
						"personStatus": "лицо-основание",
						"kmszCode": "0104.01000004.01.1000.04.010202",
						"onmszTitle": "ОНМСЗ",
						"lmszTitle": "ЛМСЗ 4",
						"decisionDate": "2018-05-03",
						"dateStart": "2018-05-03",
						"form": "04",
						"periodicity": "04",
						"amount": "12341234",
						"content": "Орган власти",
						"comment": "123412443412"
					  },
					  {
						"personStatus": "получатель",
						"kmszCode": "0101.01000001.01.1000.01.010101",
						"onmszTitle": "ОНМСЗ",
						"lmszTitle": "ЛМСЗ 1",
						"decisionDate": "2018-05-03",
						"dateStart": "2018-05-03",
						"form": "01",
						"periodicity": "01",
						"amount": "100.00"
					  },
					  {
						"personStatus": "получатель",
						"kmszCode": "0103.01000003.01.1000.03.010201",
						"onmszTitle": "ОНМСЗ",
						"lmszTitle": "ЛМСЗ 3",
						"decisionDate": "2018-05-03",
						"dateStart": "2018-05-03",
						"form": "03",
						"periodicity": "03",
						"amount": "333",
						"comment": "3333"
					  },
					  {
						"personStatus": "получатель",
						"kmszCode": "0102.01000002.01.1000.02.010102",
						"onmszTitle": "ОНМСЗ",
						"lmszTitle": "ЛМСЗ 2",
						"decisionDate": "2018-05-03",
						"dateStart": "2018-05-03",
						"form": "02",
						"periodicity": "02",
						"amount": "111"
					  }
					]
				  },
				  "obligations": {
					"obligation": [
					  {
						"kmszCode": "0101.01000001.01.1000.01.010101",
						"onmszTitle": "ОНМСЗ",
						"lmszTitle": "ЛМСЗ 1",
						"decisionDate": "2018-05-03",
						"dateStart": "2018-05-03",
						"periodicity": "01",
						"amount": "100.00",
						"payments": [
						  {
							"year": "2018",
							"month": "5",
							"amount": "100.00"
						  },
						  {
							"year": "2018",
							"month": "6",
							"amount": "100.00"
						  },
						  {
							"year": "2018",
							"month": "7",
							"amount": "100.00"
						  },
						  {
							"year": "2018",
							"month": "8",
							"amount": "100.00"
						  },
						  {
							"year": "2018",
							"month": "9",
							"amount": "100.00"
						  },
						  {
							"year": "2018",
							"month": "10",
							"amount": "100.00"
						  },
						  {
							"year": "2018",
							"month": "11",
							"amount": "100.00"
						  },
						  {
							"year": "2018",
							"month": "12",
							"amount": "100.00"
						  },
						  {
							"year": "2019",
							"month": "1",
							"amount": "100.00"
						  }
						]
					  },
					  {
						"kmszCode": "0103.01000003.01.1000.03.010201",
						"onmszTitle": "ОНМСЗ",
						"lmszTitle": "ЛМСЗ 3",
						"decisionDate": "2018-05-03",
						"dateStart": "2018-05-03",
						"periodicity": "03",
						"amount": "333",
						"payments": [
						  {
							"year": "2018",
							"month": "5",
							"amount": "27.75"
						  },
						  {
							"year": "2018",
							"month": "6",
							"amount": "27.75"
						  },
						  {
							"year": "2018",
							"month": "7",
							"amount": "27.75"
						  },
						  {
							"year": "2018",
							"month": "8",
							"amount": "27.75"
						  },
						  {
							"year": "2018",
							"month": "9",
							"amount": "27.75"
						  },
						  {
							"year": "2018",
							"month": "10",
							"amount": "27.75"
						  },
						  {
							"year": "2018",
							"month": "11",
							"amount": "27.75"
						  },
						  {
							"year": "2018",
							"month": "12",
							"amount": "27.75"
						  },
						  {
							"year": "2019",
							"month": "1",
							"amount": "27.75"
						  }
						]
					  },
					  {
						"kmszCode": "0102.01000002.01.1000.02.010102",
						"onmszTitle": "ОНМСЗ",
						"lmszTitle": "ЛМСЗ 2",
						"decisionDate": "2018-05-03",
						"dateStart": "2018-05-03",
						"periodicity": "02",
						"amount": "111",
						"payments": [
						  {
							"year": "2018",
							"month": "5",
							"amount": "37"
						  },
						  {
							"year": "2018",
							"month": "6",
							"amount": "37"
						  },
						  {
							"year": "2018",
							"month": "7",
							"amount": "37"
						  },
						  {
							"year": "2018",
							"month": "8",
							"amount": "37"
						  },
						  {
							"year": "2018",
							"month": "9",
							"amount": "37"
						  },
						  {
							"year": "2018",
							"month": "10",
							"amount": "37"
						  },
						  {
							"year": "2018",
							"month": "11",
							"amount": "37"
						  },
						  {
							"year": "2018",
							"month": "12",
							"amount": "37"
						  },
						  {
							"year": "2019",
							"month": "1",
							"amount": "37"
						  }
						]
					  }
					]
				  }
				}
			  }

   		
    	}

    },
        
}