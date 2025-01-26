var jsMultipleSubmitGuardFlag = false;
function jsMultipleSubmitGuard() {
	if (jsMultipleSubmitGuardFlag) {
		return false;
	}
	jsMultipleSubmitGuardFlag = true;
	return true;
}
window.addEventListener('load', function() {
	var item, nodes = document.getElementsByClassName("pbOpenNewWindow");
	for (var i = 0, n = nodes.length; i < n; i++) {
		item = nodes[i];
		item.setAttribute('target', '_blank');
		item.setAttribute('rel', 'noopener');
	}
});

function loadAsyncBlock(pageId, blockId, errMsg) {
	var block = document.getElementById('pbAjaxBlock' + blockId);
	var request = new XMLHttpRequest();
	request.open("get", pbGlobalAliasBase + 'view_ajax.php?pageId=' + pageId + '&blockId=' + blockId, true);
	request.onload = function (event) {
		if (request.readyState === 4) {
			if (request.status === 200) {
				block.innerHTML = request.responseText;
			} else {
				block.innerHTML = errMsg;
			}
		}
	};
	request.send(null);
}
