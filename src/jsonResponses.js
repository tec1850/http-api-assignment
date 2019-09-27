const json = 'application/json';
const xml = 'text/xml';

const respond = (request, response, status, object, type) => {
  response.writeHead(status, { 'Content-Type': type });
  response.write(object);
  response.end();
  console.log(object);
};


const getSuccess = (request, response, acceptedTypes) => {
  const responseJSON = {
    message: 'This is a successful response.',
    id: 'Success',
  };

  if (acceptedTypes[0] === xml) {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${responseJSON.message}</message>`;
    responseXML = `${responseXML} </response>`;

    return respond(request, response, 200, responseXML, xml);
  }
  return respond(request, response, 200, JSON.stringify(responseJSON), json);
};


const getBadRequest = (request, response, acceptedTypes, params) => {
  const responseJSON = {
    message: 'This request has the required parameters',
  };

  if (!params.valid || params.valid !== 'true') {
    responseJSON.message = 'Missing valid query parameter set to true';
    responseJSON.id = 'badRequest';

    if (acceptedTypes[0] === xml) {
      let responseXML = '<response>';
      responseXML = `${responseXML} <message>${responseJSON.message}</message>`;
      responseXML = `${responseXML} </response>`;

      return respond(request, response, 400, responseXML, xml);
    }
    return respond(request, response, 400, JSON.stringify(responseJSON), json);
  }

  if (acceptedTypes[0] === xml) {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${responseJSON.message}</message>`;
    responseXML = `${responseXML} </response>`;

    return respond(request, response, 200, responseXML, xml);
  }
  return respond(request, response, 200, JSON.stringify(responseJSON), json);
};


const getUnauthorized = (request, response, acceptedTypes, params) => {
  const responseJSON = {
    message: 'this request has the required parameters',
  };

  if (!params.loggedIn || params.loggedIn !== 'true') {
    responseJSON.message = 'Missing loggedin query parameter set to true';
    responseJSON.id = 'Unauthorized';

    if (acceptedTypes[0] === xml) {
      let responseXML = '<response>';
      responseXML = `${responseXML} <message>${responseJSON.message}</message>`;
      responseXML = `${responseXML} </response>`;

      return respond(request, response, 401, responseXML, xml);
    }
    return respond(request, response, 401, JSON.stringify(responseJSON), json);
  }

  if (acceptedTypes[0] === xml) {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${responseJSON.message}</message>`;
    responseXML = `${responseXML} </response>`;

    return respond(request, response, 200, responseXML, xml);
  }
  return respond(request, response, 200, JSON.stringify(responseJSON), json);
};


const getForbidden = (request, response, acceptedTypes) => {
  const responseJSON = {
    message: 'You do not have access to this content.',
    id: 'Forbidden',
  };

  if (acceptedTypes[0] === xml) {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${responseJSON.message}</message>`;
    responseXML = `${responseXML} </response>`;

    return respond(request, response, 403, responseXML, xml);
  }
  return respond(request, response, 403, JSON.stringify(responseJSON), json);
};


const getInternal = (request, response, acceptedTypes) => {
  const responseJSON = {
    message: 'Internal Server error. Something went wrong',
    id: 'Internal Error',
  };

  if (acceptedTypes[0] === xml) {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${responseJSON.message}</message>`;
    responseXML = `${responseXML} </response>`;

    return respond(request, response, 500, responseXML, xml);
  }
  return respond(request, response, 500, JSON.stringify(responseJSON), json);
};


const getNotImplemented = (request, response, acceptedTypes) => {
  const responseJSON = {
    message: 'A get request for this page has been implemented yet.',
    id: 'Not Implemented',
  };

  if (acceptedTypes[0] === xml) {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${responseJSON.message}</message>`;
    responseXML = `${responseXML} </response>`;

    return respond(request, response, 501, responseXML, xml);
  }
  return respond(request, response, 501, JSON.stringify(responseJSON), json);
};


const notFound = (request, response, acceptedTypes) => {
  const responseJSON = {
    message: 'The page you are looking for was not found.',
    id: 'notFound',
  };

  if (acceptedTypes[0] === xml) {
    let responseXML = '<response>';
    responseXML = `${responseXML} <message>${responseJSON.message}</message>`;
    responseXML = `${responseXML} </response>`;

    return respond(request, response, 404, responseXML, xml);
  }
  return respond(request, response, 404, JSON.stringify(responseJSON), json);
};


module.exports = {
  getSuccess,
  getBadRequest,
  getUnauthorized,
  getForbidden,
  getInternal,
  getNotImplemented,
  notFound,
};
