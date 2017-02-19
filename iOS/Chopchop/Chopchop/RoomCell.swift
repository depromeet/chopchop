//
//  RoomCell.swift
//  Chopchop
//
//  Created by Goodnews on 2017. 2. 14..
//  Copyright © 2017년 goodnews. All rights reserved.
//

import UIKit

class RoomCell: UICollectionViewCell {
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        setupViews()
    }
    
    required init?(coder aDecoder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }
    
    let imgView: UIImageView = {
        let iv = UIImageView()
        iv.layer.cornerRadius = 16
        iv.backgroundColor = .gray
        return iv
    }()
    
    let titleLabel: UILabel = {
        let label = UILabel()
        label.text = "치즈 인 더 치즈입니다"
        label.backgroundColor = UIColor.lightGray
        
        return label
    }()
    
    let bodyLabel: UILabel = {
        let label = UILabel()
        label.text = "바디텍스트요"
        label.backgroundColor = UIColor.lightGray
        
        return label
    }()
    
    
    func setupViews() {
        backgroundColor = .clear
        
        addSubview(imgView)
        addSubview(titleLabel)
        addSubview(bodyLabel)
        
        let imgViewHeight = frame.height - 8
        addConstraints(with: "H:|-4-[v0(\(imgViewHeight))]-4-[v1]", views: imgView, titleLabel)
        addConstraints(with: "H:|-4-[v0(\(imgViewHeight))]-4-[v1]-4-|", views: imgView, bodyLabel)
        addConstraints(with: "V:|-4-[v0(\(imgViewHeight))]|", views: imgView)
        addConstraints(with: "V:|-4-[v0(20)]-4-[v1]-4-|", views: titleLabel, bodyLabel)

    }
    
}
