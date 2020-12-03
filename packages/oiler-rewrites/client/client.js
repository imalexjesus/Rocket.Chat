import { callbacks } from '../../../app/callbacks';

function renderMessageOiler(message) {
	if (message.html.indexOf(settings.get('Site_Url')) !== -1) {
		let quoteSiteUrl = settings.get('Site_Url').replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]', 'g'), '\\$&');

		message.html = message.html.replace(new RegExp('<a.+?href=\\"'+quoteSiteUrl+'.+?\\".*?\/a>', 'g'),"");
	}

	if (message.attachments) {
		for (var i in message.attachments) {
			if (message.attachments.hasOwnProperty(i) && message.attachments[i].message_link && message.attachments[i].message_link.indexOf(settings.get('Site_Url')) !== -1) {
				message.attachments[i].message_link = '';
			}
		}
	}

	return message;
}

callbacks.add('renderMessage', renderMessageOiler, callbacks.priority.LOW, 'renderMessageOiler');
