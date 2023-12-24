basic.forever(function () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 60)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        if (true) {
        	
        } else {
        	
        }
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 160)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
    }
})
