//
//  FamousRoomCell.swift
//  Chopchop
//
//  Created by Goodnews on 2017. 2. 19..
//  Copyright © 2017년 goodnews. All rights reserved.
//

import UIKit

class FamousRoomCell: RoomCell {

    let blackView: UIView = {
        let view = UIView()
        view.backgroundColor = UIColor.black.withAlphaComponent(0.3)
        return view
    }()
    override init(frame: CGRect) {
        super.init(frame: frame)
        setupViews()
    }
    
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    override func setupViews() {
        addSubview(imgView)
        imgView.addSubview(blackView)
        blackView.addSubview(titleLabel)
        
        titleLabel.textColor = .white
        titleLabel.textAlignment = .center
        
        addConstraints(with: "H:|[v0]|", views: imgView)
        addConstraints(with: "V:|[v0]|", views: imgView)
        
        imgView.addConstraints(with: "H:|[v0]|", views: blackView)
        imgView.addConstraints(with: "V:|[v0]|", views: blackView)
        
        blackView.addConstraints(with: "H:|[v0]|", views: titleLabel)
        blackView.addConstraints(with: "V:|[v0]|", views: titleLabel)

        
        
        
        
    }
    
}
