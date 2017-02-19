//
//  RoomImgView.swift
//  Chopchop
//
//  Created by Goodnews on 2017. 2. 19..
//  Copyright © 2017년 goodnews. All rights reserved.
//

import UIKit

class RoomImgView: UIImageView {

    let backgroundView: UIView = {
        let view = UIView()
        view.backgroundColor = UIColor.black.withAlphaComponent(0.3)
        return view
    }()
    let titleLabel: UILabel = {
        let label = UILabel()
        label.text = "치즈 인 더 치즈"
        label.textColor = .white
        label.font = UIFont.boldSystemFont(ofSize: 17)
        return label
    }()
    let managerLabel: UILabel = {
        let label = UILabel()
        label.textColor = .white
        label.text = "ZNE, NEZ, 안녕나는성은뀨><"
        label.font = UIFont.boldSystemFont(ofSize: 14)
        return label
    }()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        setupViews()
    }
    
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    func setupViews() {
        addSubview(backgroundView)
        backgroundView.addSubview(titleLabel)
        backgroundView.addSubview(managerLabel)
        
        addConstraints(with: "H:|[v0]|", views: backgroundView)
        addConstraints(with: "V:[v0(60)]|", views: backgroundView)
        
        backgroundView.addConstraints(with: "V:|-8-[v0]-4-[v1]", views: titleLabel, managerLabel)
        backgroundView.addConstraints(with: "H:|-8-[v0]", views: titleLabel)
        backgroundView.addConstraints(with: "H:|-8-[v0]", views: managerLabel)
    }
}
