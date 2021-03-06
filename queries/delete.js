import { updateSudo as update } from '@lblod/mu-auth-sudo';
import { sparqlEscapeUri } from 'mu';
import { SESSIONS_GRAPH } from '../config';

/**
 * @param {string} sessionUri 
 */
export async function deleteSession(sessionUri, accountUri) {
  return update(`
    PREFIX session: <http://mu.semte.ch/vocabularies/session/>

    DELETE {
      GRAPH <${SESSIONS_GRAPH}> {
        ${sparqlEscapeUri(sessionUri)} session:account ${sparqlEscapeUri(accountUri)}.
      }
    }
    WHERE {
      GRAPH <${SESSIONS_GRAPH}> {
        ${sparqlEscapeUri(sessionUri)} session:account ${sparqlEscapeUri(accountUri)}.
      }
    }
  `);
}
