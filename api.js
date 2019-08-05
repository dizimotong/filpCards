var Base_Url = "https://go-api.tcmobile.org";
/**
 * 传入活动id，获取该活动的所有报名人信息
 * @method 方法名
 * @param  act_id 活动id
 * @return {Json}
 */
function getAllUser(act_id) {
    $.ajax({
        type: "GET",
        url: Base_Url + "/v3/draw/GetAllUsers",
        data: { act_id: act_id },
        dataType: "json",
        success: function (result) {
            // var recordTitle = document.getElementById('recordTitle')
            // var recordTitleh2 = document.createElement('h2')
            // console.log(recordTitleh2)

            // recordTitle.appendChild(recordTitleh2).setAttribute('name','中奖名单')
            // recordTitle.appendChild(recordTitleh2).setAttribute('id',9)
            // recordTitle.appendChild(recordTitleh2).innerText = '中奖名单'
        },
        error: function (result) {
            console.log("getAllUser failed! " + result);
        }
    });
}
/**
 * 传入活动id，获得所有中奖人名单
 * @method 方法名
 * @for 所属类名
 * @param  act_id 活动id
 * @return {Json}
 */
function getAllRulePeople(act_id) {
    $.ajax({
        type: "GET",
        url: Base_Url + "/v3/draw/GetAllRuleList",
        data: { act_id: act_id },
        dataType: "json",
        success: function (result) {
            var recordTitle = document.getElementById('recordTitle')
            var recordTitleh2 = document.createElement('h2')
            console.log(recordTitleh2)

            recordTitle.appendChild(recordTitleh2).setAttribute('name', '中奖名单')
            recordTitle.appendChild(recordTitleh2).setAttribute('id', result.length)
            recordTitle.appendChild(recordTitleh2).innerText = '中奖名单'

        },
        error: function (result) {
            console.log("getAllUser failed! " + result);
        }
    });
}

/**
 * 传入活动id，获取该活动下的所有轮次信息
 * @method 方法名
 * @for 所属类名
 * @param  act_id 活动id
 * @return {Json}
 */
function getRuleList(act_id) {
    $.ajax({
        type: "GET",
        url: Base_Url + "/v3/draw/GetRuleList",
        data: { act_id: act_id },
        dataType: "json",
        success: function (result) {
            // var centerDiv = document.createElement('div')





            var turnSelect = document.getElementById('turnSelect')
            // turnSelect.name = result.length
            console.log(result.length)
            for (var i = 0; i < result.length; i++) {
                var option = document.createElement('option')

                turnSelect.appendChild(option).setAttribute('id', 'turn' + result[i].id)
                turnSelect.appendChild(option).setAttribute('value', result[i].id)
                turnSelect.appendChild(option).text = result[i].name

                console.log(result[i].name)
            }

        },
        error: function (result) {
            console.log("getRuleList failed! " + result);
        }
    });
}


/**
 * 传入活动id，获取该活动下的所有轮次信息
 * @method 方法名
 * @for 所属类名
 * @param  act_id 活动id
 * @return {Json}
 */
function getAllRecordPeopleList(act_id) {
    $.ajax({
        type: "GET",
        url: Base_Url + "/v3/draw/GetRuleList",
        data: { act_id: act_id },
        dataType: "json",
        success: function (result) {
            // var centerDiv = document.createElement('div')

            var centerDiv = document.getElementById('centerDiv')
            var div = document.createElement('div')
            var h2 = document.createElement('h2')
            var ul = document.createElement('ul')
            centerDiv.appendChild(div).appendChild(h2)

            div.setAttribute('id', 'centerDivTitle')
            h2.innerHTML = '中奖名单'
            for (var i = 0; i < result.length; i++) {
                var div = document.createElement('div')
                var div1 = document.createElement('div')
                var div2 = document.createElement('div')
                var span1 = document.createElement('span')
                var span2 = document.createElement('span')
                var span3 = document.createElement('span')
                var ul = document.createElement('ul')
                centerDiv.appendChild(div).appendChild(div1).appendChild(span1)
                centerDiv.appendChild(div).appendChild(div1).appendChild(span2)
                centerDiv.appendChild(div).appendChild(div1).appendChild(span3)
                centerDiv.appendChild(div).appendChild(div2).appendChild(ul)

                // div.style.cssText = 'overflow: hidden;'
                div.setAttribute('id', 'centerDivturnDiv' + result[i].id)
                div1.className = 'turn'
                div2.className = 'centerDivMenu'

                span1.className = 'line'
                span2.className = 'txt'
                span2.innerHTML = result[i].name
                span3.className = 'line'

                ul.setAttribute('id', 'centerDivul' + result[i].id)

            }




        },
        error: function (result) {
            console.log("getRuleList failed! " + result);
        }
    });
}
/**
 * 传入活动id和轮次id进行抽奖，后端自动筛选有资格的用户与可以获取的奖品进行抽奖，然后返回所有中奖人信息。
 * @method 方法名
 * @for 所属类名
 * @param  act_id 活动id
 * @param rule_id 轮次id
 * @return {Json} 所有中奖人信息
 */
function getAwardUsers(act_id, rule_id) {

    $.ajax({
        type: "GET",
        url: Base_Url + "/v3/draw/GetAwardUsers",
        data: { act_id: act_id, rule_id: rule_id },
        dataType: "json",
        success: function (result) {
            var contentDiv = document.getElementById("content")
            var ul = document.createElement('ul')
            contentDiv.appendChild(ul)
            for (var i = 0; i < result.length; i++) {
                var li = document.createElement('li')
                var a = document.createElement('a')
                a.setAttribute('id', 'a' + result[i].id)
                var firstDiv = document.createElement('div')
                firstDiv.setAttribute('id', 'fd' + result[i].id)
                var lastDiv = document.createElement('div')
                lastDiv.setAttribute('id', 'ld' + result[i].id)
                var img = document.createElement('img')

                var h2 = document.createElement('h2')
                var p = document.createElement('p')
                h2.setAttribute('id', 'cardh2' + result[i].id)
                p.setAttribute('id', 'cardp' + result[i].id)
                img.setAttribute('src', result[i].head_pic)

                img.style.cssText = 'float: left;width:20px;height:20px;margin:10px 10px;'
                ul.appendChild(li).appendChild(a).appendChild(firstDiv)
                ul.appendChild(li).appendChild(a).appendChild(lastDiv).appendChild(img)
                ul.appendChild(li).appendChild(a).appendChild(lastDiv).appendChild(h2)

                ul.appendChild(li).appendChild(a).appendChild(lastDiv).appendChild(p)
                h2.innerHTML = result[i].nick_name
                p.innerHTML = result[i].tel
                if (result.length > 10) {
                    firstDiv.style.cssText = 'background-size: ' + 180 * 0.5 + 'px ' + 180 * 0.5 + 'px;'
                    lastDiv.style.cssText = 'width:' + 180 * 0.5 + 'px;height:' + 225 * 0.5 + 'px;'
                    h2.style.cssText = 'width:100px;height:8px;'
                    p.style.cssText = 'font-size:8px;'
                    li.style.cssText = 'width:' + 180 * 0.5 + 'px;height:' + 225 * 0.5 + 'px;'

                }

            }


        },
        error: function (result) {
            console.log("getAwardUsers failed! " + result);
        }
    });

}

/**
 * 传入活动id和轮次，返回该轮次所有中奖的用户（已经领取了奖励）
 * @method 方法名
 * @for 所属类名
 * @param  act_id 活动id
 * @return {Json}
 */
function getTurnRuleList(act_id, turn) {
    $.ajax({
        type: "GET",
        url: Base_Url + "/v3/draw/GetAllRuleList",
        data: { act_id: act_id },
        dataType: "json",
        success: function (result) {
            // var recordTitle = document.getElementById('recordTitle')
            // var recordTitleh2 = document.createElement('h2')
            // console.log(recordTitleh2)

            // recordTitle.appendChild(recordTitleh2).setAttribute('name','中奖名单')
            // recordTitle.appendChild(recordTitleh2).setAttribute('id',result.length)
            // recordTitle.appendChild(recordTitleh2).innerText = '中奖名单'
            console.log(turn)
            $('#turn' + turn).focus()


            for (var i = 0; i < result.length; i++) {
                var recordListDiv = document.createElement('div')
                var h4 = document.createElement('h4')
                var p = document.createElement('p')
                var img = document.createElement('img')


                //    if(result[i].rule_id == $('#turn'+result[i].rule_id))
                if (result[i].rule_id == turn) {
                    var recordList = document.getElementById('recordList')

                    var turn_select_li = document.getElementById('turn_select').children[0].children[result[i].rule_id - 1]
                    turn_select_li.style.cssText = 'background-color: #69a4cc;'

                    recordListDiv.setAttribute('id', 'recordListDiv' + result[i].id)
                    recordListDiv.setAttribute('name', result[i].rule_id)

                    recordListDiv.setAttribute('width', 'auto')
                    recordListDiv.setAttribute('height', 'auto')

                    recordList.appendChild(recordListDiv).appendChild(img)

                    recordList.appendChild(recordListDiv).appendChild(h4)
                    recordList.appendChild(recordListDiv).appendChild(p)

                    img.setAttribute('src', result[i].head_pic)
                    img.setAttribute('width', '20px')
                    img.setAttribute('height', '20px')

                    h4.innerHTML = result[i].nick_name
                    h4.setAttribute('width', 'auto')
                    h4.setAttribute('id', 'recordListh4' + result[i].id)
                    p.innerHTML = result[i].tel
                    // p.setAttribute('value',result.length)
                    p.setAttribute('id', 'recordListp' + result[i].id)
                    p.setAttribute('width', 'auto')

                    // $('#recordListDiv'+result[i].id).hide()
                }
                else {
                    var turn_select_li = document.getElementById('turn_select').children[0].children[result[i].rule_id - 1]
                    turn_select_li.style.cssText = 'background-color: #99cccc;'
                }

            }

        },
        error: function (result) {
            console.log("getAllUser failed! " + result);
        }
    });
}

/**
 * 传入活动id，返回该活动所有中奖的用户（已经领取了奖励），进行轮次的区分
 * @method 方法名
 * @for 所属类名
 * @param  act_id 活动id
 * @return {Json}
 */
function getAllRuleList(act_id) {
    $.ajax({
        type: "GET",
        url: Base_Url + "/v3/draw/GetAllRuleList",
        data: { act_id: act_id },
        dataType: "json",
        success: function (result) {
            // var recordTitle = document.getElementById('recordTitle')
            // var recordTitleh2 = document.createElement('h2')
            // console.log(recordTitleh2)

            // recordTitle.appendChild(recordTitleh2).setAttribute('name','中奖名单')
            // recordTitle.appendChild(recordTitleh2).setAttribute('id',result.length)
            // recordTitle.appendChild(recordTitleh2).innerText = '中奖名单'



            for (var i = 0; i < result.length; i++) {
                var recordListDiv = document.createElement('div')
                var h4 = document.createElement('h4')
                var p = document.createElement('p')
                var img = document.createElement('img')



                //    if(result[i].rule_id == $('#turn'+result[i].rule_id))
                if (result[i].rule_id == $("#turnSelect option:selected").val()) {
                    var recordList = document.getElementById('recordList')

                    var turn_select_li = document.getElementById('turn_select').children[0].children[result[i].rule_id - 1]
                    turn_select_li.style.cssText = 'background-color: #69a4cc;'

                    recordListDiv.setAttribute('id', 'recordListDiv' + result[i].id)
                    recordListDiv.setAttribute('name', result[i].rule_id)

                    recordListDiv.setAttribute('width', 'auto')
                    recordListDiv.setAttribute('height', 'auto')

                    recordList.appendChild(recordListDiv).appendChild(img)

                    recordList.appendChild(recordListDiv).appendChild(h4)
                    recordList.appendChild(recordListDiv).appendChild(p)

                    img.setAttribute('src', result[i].head_pic)
                    img.setAttribute('width', '20px')
                    img.setAttribute('height', '20px')

                    h4.innerHTML = result[i].nick_name
                    h4.setAttribute('width', 'auto')
                    h4.setAttribute('id', 'recordListh4' + result[i].id)
                    p.innerHTML = result[i].tel
                    // p.setAttribute('value',result.length)
                    p.setAttribute('id', 'recordListp' + result[i].id)
                    p.setAttribute('width', 'auto')

                    $('#recordListDiv' + result[i].id).hide()
                }
                else {
                    var turn_select_li = document.getElementById('turn_select').children[0].children[result[i].rule_id - 1]
                    turn_select_li.style.cssText = 'background-color: #99cccc;'
                }

            }

        },
        error: function (result) {
            console.log("getAllUser failed! " + result);
        }
    });
}
/**
 * 返回该活动所有中奖的用户（已经领取了奖励）
 * @method 方法名
 * @for 所属类名
 * @param  act_id 活动id
 * @return {Json}
 */
function getAllRulePeopleList(act_id) {
    $.ajax({
        type: "GET",
        url: Base_Url + "/v3/draw/GetAllRuleList",
        data: { act_id: act_id },
        dataType: "json",
        success: function (result) {



            // var centerDivMenu = document.getElementById("centerDivMenu")
            // var ul = document.createElement('ul')
            // centerDivMenu.appendChild(ul);
            // var ul = document.createElement('ul')

            for (var i = 0; i < result.length; i++) {
                console.log(document.getElementById('centerDivturnDiv' + result[i].rule_id).id)
                // if (result[i].rule_id == $("#turnSelect option:selected").val()) {
                //     turnArray[$("#turnSelect option:selected").val()] = true
                //     $('#turnSelect').attr("disabled", true);
                //     $("#turn" + $("#turnSelect option:selected").val()).attr("disabled", true);
                //     var turnText = $("#turn" + $("#turnSelect option:selected").val()).text()
                //     $("#turn" + $("#turnSelect option:selected").val()).text(turnText + '（已抽奖）');
                // }
                var li = document.createElement('li')
                var h2 = document.createElement('h2')
                var p = document.createElement('p')
                var img = document.createElement('img')
                // if(document.getElementById('centerDivturnDiv'+ result[i].rule_id)){
     

                var centerDivul = document.getElementById('centerDivul' + result[i].rule_id)
                centerDivul.appendChild(li).appendChild(h2)
                centerDivul.appendChild(li).appendChild(img)
                centerDivul.appendChild(li).appendChild(p)
                // centerDivturnDiv.appendChild(ul).appendChild(li).appendChild(h2)

                li.style.cssText = 'float:left;'


                // li.appendChild()
                // li.appendChild().appendChild(img)
                // li.appendChild().appendChild(p)
                img.setAttribute('src', result[i].head_pic)
                img.setAttribute('width', '70px')
                img.setAttribute('height', '70px')

                h2.innerHTML = result[i].nick_name
                p.innerHTML = result[i].tel
                // }


            }

        },
        error: function (result) {
            console.log("getAllUser failed! " + result);
        }
    });
}
/**
 * 判断给轮次是否已经抽奖
 * @method 方法名
 * @for 所属类名
 * @param  act_id 活动id
 * @return {Json}
 */
function getTurnBeRecord(act_id) {
    $.ajax({
        type: "GET",
        url: Base_Url + "/v3/draw/GetAllRuleList",
        data: { act_id: act_id },
        dataType: "json",
        success: function (result) {



            // var centerDivMenu = document.getElementById("centerDivMenu")
            // var ul = document.createElement('ul')
            // centerDivMenu.appendChild(ul);
            // var ul = document.createElement('ul')

            // for (var i = 0; i < result.length; i++) {
            //     // console.log(document.getElementById('centerDivturnDiv' + result[i].rule_id).id)
            //     if (result[i].rule_id == $("#turnSelect option:selected").val()) {
            //         turnArray[$("#turnSelect option:selected").val()] = true
            //         $('#turnSelect').attr("disabled", true);
            //         $("#turn" + $("#turnSelect option:selected").val()).attr("disabled", true);
            //         var turnText = $("#turn" + $("#turnSelect option:selected").val()).text()
            //         $('#startbutton').hide()
            //     }
            
            //     // }


            // }
            // $("#turn" + $("#turnSelect option:selected").val()).text(turnText + '（已抽奖）');
        },
        error: function (result) {
            console.log("getAllUser failed! " + result);
        }
    });
}