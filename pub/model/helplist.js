const db = require('./../db/mysqlHelper.js')

const roles = {

    async add(args) {
        let sql = 'INSERT INTO helplist (wx_id,title,state,des,a_id,total_fee,form_id,mu,qi,file,cai,order_num,openid,page,location,whentask,whenend) value(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
        let params = [args.wx_id, args.title, 1, args.des, args.a_id, args.total_fee, args.form_id, args.mu, args.qi, args.file, args.cai, args.order_num, args.openid, args.page, args.location,args.whentask, args.whenend]
        let result = await db.query(sql, params)
        return result
    },
    async updateState(args) {
        let sql = 'UPDATE helplist set state=?,is_pay=? where id = ?'
        let params = [args.state, 1, args.id]
        let result = await db.query(sql, params)
        return result
    },
	async getTeacher(args) {
        let sql = 'SELECT isTeacher from wxuser where id= ?'
        let params = [args.wx_id]
        let result = await db.query(sql, params)
        return result
    },
	async regTeacher(args) {
		let sql = 'INSERT INTO teacher_requests (wx_id,department,teachername) value(?,?,?)'
        let params = [args.wx_id, args.department, args.teachername]
        let result = await db.query(sql, params)
        return result
    },
	async submitFeedback(args) {
		let sql = 'INSERT INTO user_feedbacks (wx_id,feedback) value(?,?)'
        let params = [args.wx_id, args.feedback]
        let result = await db.query(sql, params)
        return result
    },
    async updatePayed(args) {
        let sql = 'UPDATE helplist set state=1,pay_time=now(),is_pay=1 where id = ?'
        let params = [args.id]
        let result = await db.query(sql, params)
        return result
    },
    async updatCancel(args) {
        let sql = 'UPDATE helplist set state=4,cancel_time=now() where id = ?'
        let params = [args.id]
        let result = await db.query(sql, params)
        return result
    },
    async updateRedundNo(args) {
        let sql = 'UPDATE helplist set out_refund_no=? where id = ?'
        let params = [args.out_refund_no, args.id]
        let result = await db.query(sql, params)
        return result
    },
    async jd(args) {
        let sql = 'update helplist set state = 2,jd_id=?,jd_time=now() where id = ?'
        let params = [args.jd_id, args.id]
        let result = await db.query(sql, params)
        return result
    },
    async confirm(args) {
        let sql = 'update helplist set state = 3,hours=?,com_time=now() where id = ?'
        let params = [args.hours, args.id]
        let result = await db.query(sql, params)
        return result
    },
    async updateOrderNum(oid, id) {
        let sql = 'UPDATE helplist set order_num=? where id = ?'
        let params = [oid, id]
        let result = await db.query(sql, params)
        return result
    },
    async getById(id) {
        let sql = 'select * from helplist where id = ?'
        let params = [id]
        let result = await db.query(sql, params)
        return result
    },
    async updateDel(ids) {
        let sql = 'UPDATE y_roles set is_delete=1 where pk_id in (' + ids + ')'
        let result = await db.query(sql, [])
        return result
    },

    async getList(args) {
        let result = await db.commonSelect(args)
        return result
    },
    async getUserByAid(id) {
        let sql = 'select * from y_user where a_id = ?'
        let result = await db.query(sql, [id])
        return result
    },
    async getServerByDlIdAndServerName(id, server_name) {
        let sql = 'select * from dl_server where dl_id = ? and server_name=?'
        let result = await db.query(sql, [id, server_name])
        return result
    }
}

module.exports = roles