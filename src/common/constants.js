/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-09 15:35:35
 * @LastEditTime: 2019-10-10 09:05:17
 * @LastEditors: Please set LastEditors
 */
// 分组和定义名称校验
export const code_verifer = '^[a-z0-9A-Z\u4e00-\u9fa5\（）\()\_\-]+$';

export const CODE_CONFIRM = '名称可以为数字、字母、中文字符、括号、下划线、横杠！';

export const CODE_LENGTH_CONFIRM = '名称长度不能超过20位！';

export const deafult_xml = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" id="Definitions_0fppxr8" targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="Process_1" isExecutable="false" />
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1" />
  </bpmndi:BPMNDiagram>
</bpmn:definitions>
`;
export const upload = `
<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_0fppxr8" targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="Process_1" isExecutable="false">
    <bpmn:startEvent id="StartEvent_0rb2r0h" name="开始">
      <bpmn:outgoing>SequenceFlow_1j17x03</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:task id="Task_18z9yid" name="待上报">
      <bpmn:incoming>SequenceFlow_1j17x03</bpmn:incoming>
      <bpmn:incoming>SequenceFlow_0uioj3y</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_1kk6q43</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="SequenceFlow_1j17x03" name="开启" sourceRef="StartEvent_0rb2r0h" targetRef="Task_18z9yid" />
    <bpmn:task id="Task_07oscxj" name="已上报">
      <bpmn:incoming>SequenceFlow_1kk6q43</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_0uioj3y</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="SequenceFlow_1kk6q43" name="上报" sourceRef="Task_18z9yid" targetRef="Task_07oscxj" />
    <bpmn:sequenceFlow id="SequenceFlow_0uioj3y" name="退回" sourceRef="Task_07oscxj" targetRef="Task_18z9yid" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
      <bpmndi:BPMNShape id="StartEvent_0rb2r0h_di" bpmnElement="StartEvent_0rb2r0h">
        <dc:Bounds x="262" y="162" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="269" y="205" width="22" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_18z9yid_di" bpmnElement="Task_18z9yid">
        <dc:Bounds x="380" y="160" width="40" height="40" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="384" y="207" width="33" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_1j17x03_di" bpmnElement="SequenceFlow_1j17x03">
        <di:waypoint x="298" y="180" />
        <di:waypoint x="380" y="180" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="329" y="162" width="21" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Task_07oscxj_di" bpmnElement="Task_07oscxj">
        <dc:Bounds x="510" y="160" width="40" height="40" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="514" y="207" width="34" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_1kk6q43_di" bpmnElement="SequenceFlow_1kk6q43">
        <di:waypoint x="420" y="180" />
        <di:waypoint x="510" y="180" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="454" y="162" width="23" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_0uioj3y_di" bpmnElement="SequenceFlow_0uioj3y">
        <di:waypoint x="510" y="189" />
        <di:waypoint x="460" y="210" />
        <di:waypoint x="420" y="194" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="455" y="223" width="21" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>
`;

export const submit = `
<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_0fppxr8" targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="Process_1" isExecutable="false">
    <bpmn:startEvent id="StartEvent_02vywan" name="开始">
      <bpmn:outgoing>SequenceFlow_06031kk</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:task id="Task_14yk853" name="待送审">
      <bpmn:incoming>SequenceFlow_06031kk</bpmn:incoming>
      <bpmn:incoming>SequenceFlow_186r63n</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_0ko1ohq</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="SequenceFlow_06031kk" name="开启" sourceRef="StartEvent_02vywan" targetRef="Task_14yk853" />
    <bpmn:task id="Task_1cn1fqq" name="待上报">
      <bpmn:incoming>SequenceFlow_0ko1ohq</bpmn:incoming>
      <bpmn:incoming>SequenceFlow_052o80b</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_186r63n</bpmn:outgoing>
      <bpmn:outgoing>SequenceFlow_05quvjz</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="SequenceFlow_0ko1ohq" name="送审" sourceRef="Task_14yk853" targetRef="Task_1cn1fqq" />
    <bpmn:sequenceFlow id="SequenceFlow_186r63n" name="退审" sourceRef="Task_1cn1fqq" targetRef="Task_14yk853" />
    <bpmn:task id="Task_14uau6v" name="已上报">
      <bpmn:incoming>SequenceFlow_05quvjz</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_052o80b</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="SequenceFlow_05quvjz" name="上报" sourceRef="Task_1cn1fqq" targetRef="Task_14uau6v" />
    <bpmn:sequenceFlow id="SequenceFlow_052o80b" name="退回" sourceRef="Task_14uau6v" targetRef="Task_1cn1fqq" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
      <bpmndi:BPMNShape id="StartEvent_02vywan_di" bpmnElement="StartEvent_02vywan">
        <dc:Bounds x="192" y="152" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="199" y="195" width="22" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_14yk853_di" bpmnElement="Task_14yk853">
        <dc:Bounds x="320" y="150" width="40" height="40" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="325" y="197" width="32" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_06031kk_di" bpmnElement="SequenceFlow_06031kk">
        <di:waypoint x="228" y="170" />
        <di:waypoint x="320" y="170" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="264" y="152" width="21" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Task_1cn1fqq_di" bpmnElement="Task_1cn1fqq">
        <dc:Bounds x="460" y="150" width="40" height="40" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="464" y="197" width="33" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_0ko1ohq_di" bpmnElement="SequenceFlow_0ko1ohq">
        <di:waypoint x="360" y="170" />
        <di:waypoint x="460" y="170" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="400" y="152" width="21" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_186r63n_di" bpmnElement="SequenceFlow_186r63n">
        <di:waypoint x="460" y="179" />
        <di:waypoint x="410" y="200" />
        <di:waypoint x="360" y="183" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="399" y="207" width="21" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Task_14uau6v_di" bpmnElement="Task_14uau6v">
        <dc:Bounds x="600" y="150" width="40" height="40" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="604" y="197" width="34" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_05quvjz_di" bpmnElement="SequenceFlow_05quvjz">
        <di:waypoint x="500" y="170" />
        <di:waypoint x="600" y="170" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="538" y="175" width="23" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_052o80b_di" bpmnElement="SequenceFlow_052o80b">
        <di:waypoint x="600" y="159" />
        <di:waypoint x="550" y="130" />
        <di:waypoint x="500" y="160" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="539" y="113" width="21" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>
`

export const submit_comfirm = `
<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_0fppxr8" targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="Process_1" isExecutable="false">
    <bpmn:startEvent id="start" name="开始">
      <bpmn:outgoing>act_start</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:task id="dfu_submit" name="待送审">
      <bpmn:incoming>act_start</bpmn:incoming>
      <bpmn:incoming>act_return</bpmn:incoming>
      <bpmn:outgoing>act_submit</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="act_start" name="开启" sourceRef="StartEvent_0x6n6eu" targetRef="dfu_submit" />
    <bpmn:task id="dfu_upload" name="待上报">
      <bpmn:incoming>act_submit</bpmn:incoming>
      <bpmn:incoming>act_reject1</bpmn:incoming>
      <bpmn:incoming>act_reject2</bpmn:incoming>
      <bpmn:outgoing>act_upload</bpmn:outgoing>
      <bpmn:outgoing>act_return</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="act_submit" name="送审" sourceRef="dfu_submit" targetRef="dfu_upload" />
    <bpmn:task id="dfu_confirm" name="待确认">
      <bpmn:incoming>act_upload</bpmn:incoming>
      <bpmn:outgoing>act_reject1</bpmn:outgoing>
      <bpmn:outgoing>act_confirm</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="act_upload" name="上报" sourceRef="dfu_upload" targetRef="dfu_confirm" />
    <bpmn:sequenceFlow id="act_reject1" name="退回" sourceRef="dfu_confirm" targetRef="dfu_upload" />
    <bpmn:sequenceFlow id="act_return" name="退审" sourceRef="dfu_upload" targetRef="dfu_submit" />
    <bpmn:task id="dfu_complete" name="已确认">
      <bpmn:incoming>act_confirm</bpmn:incoming>
      <bpmn:outgoing>act_reject2</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="act_confirm" name="确认" sourceRef="dfu_confirm" targetRef="dfu_complete" />
    <bpmn:sequenceFlow id="act_reject2" name="退回" sourceRef="dfu_complete" targetRef="dfu_upload" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
      <bpmndi:BPMNShape id="StartEvent_0x6n6eu_di" bpmnElement="StartEvent_0x6n6eu">
        <dc:Bounds x="162" y="162" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="169" y="205" width="22" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_07mevxn_di" bpmnElement="dfu_submit">
        <dc:Bounds x="310" y="160" width="40" height="40" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="315" y="207" width="32" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_0lpl81g_di" bpmnElement="act_start">
        <di:waypoint x="198" y="180" />
        <di:waypoint x="310" y="180" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="245" y="162" width="21" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Task_1lblnqc_di" bpmnElement="dfu_upload">
        <dc:Bounds x="470" y="160" width="40" height="40" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="474" y="207" width="33" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_1tbg5uy_di" bpmnElement="act_submit">
        <di:waypoint x="350" y="180" />
        <di:waypoint x="470" y="180" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="400" y="162" width="21" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Task_025w3z9_di" bpmnElement="dfu_confirm">
        <dc:Bounds x="640" y="160" width="40" height="40" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="645" y="207" width="33" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_1js33or_di" bpmnElement="act_upload">
        <di:waypoint x="510" y="180" />
        <di:waypoint x="640" y="180" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="598" y="162" width="23" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_0ph271u_di" bpmnElement="act_reject1">
        <di:waypoint x="640" y="189" />
        <di:waypoint x="575" y="220" />
        <di:waypoint x="510" y="190" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="564" y="223" width="21" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_0fdqnhg_di" bpmnElement="act_return">
        <di:waypoint x="470" y="187" />
        <di:waypoint x="410" y="210" />
        <di:waypoint x="350" y="195" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="399" y="223" width="21" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Task_0j6vqil_di" bpmnElement="dfu_complete">
        <dc:Bounds x="780" y="160" width="40" height="40" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="783" y="207" width="34" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_1f0jdpa_di" bpmnElement="act_confirm">
        <di:waypoint x="680" y="180" />
        <di:waypoint x="780" y="180" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="699" y="162" width="22" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_0qcxf7a_di" bpmnElement="act_reject2">
        <di:waypoint x="780" y="173" />
        <di:waypoint x="660" y="130" />
        <di:waypoint x="510" y="170" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="649" y="113" width="21" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>
`

export const comfirm = `
<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" id="Definitions_0fppxr8" targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="Process_1" isExecutable="false">
    <bpmn:startEvent id="StartEvent_0eqg0w3" name="开始">
      <bpmn:outgoing>SequenceFlow_1k32a0f</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:task id="Task_1asif0z" name="待上报">
      <bpmn:incoming>SequenceFlow_1k32a0f</bpmn:incoming>
      <bpmn:incoming>SequenceFlow_12are6h</bpmn:incoming>
      <bpmn:incoming>SequenceFlow_091oerg</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_05dfnu8</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="SequenceFlow_1k32a0f" name="开启" sourceRef="StartEvent_0eqg0w3" targetRef="Task_1asif0z" />
    <bpmn:task id="Task_01b5vny" name="待确认">
      <bpmn:incoming>SequenceFlow_05dfnu8</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_12are6h</bpmn:outgoing>
      <bpmn:outgoing>SequenceFlow_09231pq</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="SequenceFlow_05dfnu8" name="上报" sourceRef="Task_1asif0z" targetRef="Task_01b5vny" />
    <bpmn:sequenceFlow id="SequenceFlow_12are6h" name="退回" sourceRef="Task_01b5vny" targetRef="Task_1asif0z" />
    <bpmn:task id="Task_0508yp4" name="已确认">
      <bpmn:incoming>SequenceFlow_09231pq</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_091oerg</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="SequenceFlow_09231pq" name="确认" sourceRef="Task_01b5vny" targetRef="Task_0508yp4" />
    <bpmn:sequenceFlow id="SequenceFlow_091oerg" name="退回" sourceRef="Task_0508yp4" targetRef="Task_1asif0z" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
      <bpmndi:BPMNShape id="StartEvent_0eqg0w3_di" bpmnElement="StartEvent_0eqg0w3">
        <dc:Bounds x="192" y="142" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="199" y="185" width="22" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_1asif0z_di" bpmnElement="Task_1asif0z">
        <dc:Bounds x="330" y="140" width="40" height="40" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="334" y="187" width="33" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_1k32a0f_di" bpmnElement="SequenceFlow_1k32a0f">
        <di:waypoint x="228" y="160" />
        <di:waypoint x="330" y="160" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="269" y="142" width="21" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Task_01b5vny_di" bpmnElement="Task_01b5vny">
        <dc:Bounds x="480" y="140" width="40" height="40" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="485" y="187" width="33" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_05dfnu8_di" bpmnElement="SequenceFlow_05dfnu8">
        <di:waypoint x="370" y="160" />
        <di:waypoint x="480" y="160" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="414" y="142" width="23" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_12are6h_di" bpmnElement="SequenceFlow_12are6h">
        <di:waypoint x="480" y="168" />
        <di:waypoint x="425" y="190" />
        <di:waypoint x="370" y="173" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="414" y="196" width="21" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="Task_0508yp4_di" bpmnElement="Task_0508yp4">
        <dc:Bounds x="630" y="140" width="40" height="40" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="633" y="187" width="34" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_09231pq_di" bpmnElement="SequenceFlow_09231pq">
        <di:waypoint x="520" y="160" />
        <di:waypoint x="630" y="160" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="539" y="142" width="22" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="SequenceFlow_091oerg_di" bpmnElement="SequenceFlow_091oerg">
        <di:waypoint x="630" y="153" />
        <di:waypoint x="500" y="110" />
        <di:waypoint x="370" y="145" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="489" y="83" width="21" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>
`