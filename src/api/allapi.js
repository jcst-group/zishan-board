import { getAction,postAction} from '@/api/manage'

/**
 * (params)=>postAction("",params);
 * (params)=>getAction("",params);
 * @param params
 * @returns {*}
 */

 //获取公司信息
const getCompany = (params)=>getAction("/board/getCompanyInfoById",params);

//获取所有基地
const getAllBase = (params)=>getAction("/board/getAllBase",params);

//获取用肥情况
const getFatByCompanyId = (params)=>getAction("/board/getFatByCompanyId",params);

//获取基地土壤平均值
const getAllTesting = (params)=>getAction("/board/getAllTesting",params);

//根据baseId获取基地信息
const getBaseInfoById = (params)=>getAction("/board/getBaseInfoById",params);

//根据lotId获取地块信息
const getLotInfoById = (params)=>getAction("/board/getLotInfoById",params);

//根据lotId获取检测数据
const getDetectionData = (params)=>getAction("/board/getDetectionData",params);

//根据lotId获取采收产量数据
const getRecoveryData = (params)=>getAction("/board/getRecoveryData",params);

//获取最新采集监测数据
const getLastMonitor = (params)=>getAction("/board/getLastMonitor",params);

//根据serialNumber和ChannelNo获取baseId
const getBaseIdVideo = (params)=>getAction("/board/getBaseIdVideo",params);

//获取服务团队
const getTeam = (params)=>getAction("/board/getTeam",params);

//根据地块查出种植批次 
const getCropBatch = (params)=>getAction("/board/getCropBatch",params);

//获取已经管理起来的监控设备列表
const getVideoList = (params)=>getAction("/board/getVideoList",params);

//获取监控视频的所有管理起来的通道
const getChannelList = (params)=>getAction("/board/getChannelList",params);

//订单基地采购计划
const basePurchase = (params)=>getAction("/board/finance/basePurchase",params);

//规范化种植协议
const getBoardStandardPlan = (params)=>getAction("/board/finance/getBoardStandardPlan",params);

//质押物权
const getBoardPledgeGoods = (params)=>getAction("/board/finance/getBoardPledgeGoods",params);

//物资采购
const getBoardFertilizerPurchase = (params)=>getAction("/board/finance/getBoardFertilizerPurchase",params);

//劳务派遣
const getBoardLaborDispatch = (params)=>getAction("/board/finance/getBoardLaborDispatch",params);

//保险
const getBoardInsuranceContract = (params)=>getAction("/board/finance/getBoardInsuranceContract",params);

//订单采购
const getBoardOrderContract = (params)=>getAction("/board/finance/getBoardOrderContract",params);

//贷款计划枚举
const getLoanTypeEnum = (params)=>getAction("/enum/getLoanTypeEnum",params);

//贷款
const getBoardLoanContract = (params)=>getAction("/board/finance/getBoardLoanContract",params);

// 获取经纬度
const getEquipmentLng = (params) => getAction("/board/getEquipmentLng", params)

// 大气环境
const getAtmosphereData = (params) => getAction("/board/getAtmosphereData", params)

// 土壤
const getSoilData = params => getAction('/board/getSoilData', params)

// 降雨
const getRainData = params => getAction('/board/getRainData', params)

// 根据ID查设备
const getLastMonitor2 = (params)=>getAction("/board/getLastMonitor2",params);

// 风速风向
const chartWsrose = params => getAction('/board/chartWsrose', params);

//基地全景
const getPanoramaUrl =(params)=>getAction("/board/getPanoramaUrl",params);

//预期愿景
const getCompanyExpect =(params)=>getAction("/board/getCompanyExpect",params);

// 农残检测数据
const getPesticideResidues = (params) => getAction("/board/getPesticideResidues", params)

// 查询基地对应设备接口
const getEquipmentByBaseId = params => getAction('/board/getEquipmentByBaseId', params)

//首页基础信息
const getCompanyInfoById = params => getAction('/board/getCompanyInfoById',params);

//获取工单
const getZsWorkOrder = params => getAction('/board/getZsWorkOrder',params);

//登录
const Login = params => postAction('/show/user/login',params);

//获取经纬度
const getLongitudeById = params => getAction('/board/getLongitudeById',params);

//获取icon
const getLogoPic = params => getAction('/platform-info/getLogoPic',params); 
 
//获取title
const getPlatform = params => getAction('/platform-info/list', params);
// 获取平台信息
const getPlatInfo = params => getAction('/platform-info/getPlatformByType', params)

export {
  getPlatform,
  getLogoPic,
  getLongitudeById,
  Login,
  getZsWorkOrder,
  getCompanyInfoById,
  getEquipmentByBaseId,
  getPesticideResidues,
  getPanoramaUrl,
  getCompanyExpect,
  getBoardLoanContract,
  getLoanTypeEnum,
  getBoardOrderContract,
  getBoardInsuranceContract,
  getBoardLaborDispatch,
  getBoardFertilizerPurchase,
  getBoardPledgeGoods,
  getBoardStandardPlan,
  basePurchase,
  getChannelList,
  getVideoList,
  getBaseIdVideo,
  getBaseInfoById,
  getCompany,
  getAllBase,
  getFatByCompanyId,
  getAllTesting,
  getLotInfoById,
  getDetectionData,
  getRecoveryData,
  getLastMonitor,
  getTeam,
  getCropBatch,
  getEquipmentLng,
  getAtmosphereData,
  getSoilData,
  getRainData,
  getLastMonitor2,
  chartWsrose,
  getPlatInfo
}
